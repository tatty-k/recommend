import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js';
import Landing from './pages/Landing/Landing.js';
import Profile from './pages/Profile/Profile.js';
import Group from './pages/Group/Group.js';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import './images/LandingBackground.png';
import groupService from './utils/groupsService';
import userService from './utils/userService';
import tokenService from './utils/tokenService';

class App extends Component{
      state = {
        groups: [],
        users: [],
        newGroup: {
          name: '',
          description: '',
          members: []
        },
        user: userService.getUser()
      };

  async componentDidMount() {
    const groups = await groupService.index();
    const users = await userService.userIndex();

    this.setState({
      groups,
      users
    });
  };
  
  addGroup = e => {
    e.preventDefault();
    // TODO: move this to file that hold index() -above
    // does this need to be asynchronouse
    fetch('/api/groups', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json", 
        'Authorization': 'Bearer ' + tokenService.getToken()
      },
      body: JSON.stringify(this.state.newGroup)
    }).then(response => console.log(response))
    this.setState(state => ({
      groups: [...state.groups, state.newGroup],
      newGroup: { name: '', description: '', members:[]}
    }))
    
  };

  handleCreateGroup = e => {
    let newGroup = {...this.state.newGroup};
    const userId = e.target.dataset.userid;
    if (e.target.type !== "checkbox"){
      newGroup[e.target.name] = e.target.value;
    } else {
      if (e.target.checked && !newGroup.members.includes(userId)) {
      newGroup.members.push(userId)
      console.log("userId",userId)
    } else {
      if (!e.target.checked) {
        const index = newGroup.members.indexOf(userId);
        newGroup.members.splice(index,1);
      }
    }
  }  
    this.setState({
      newGroup
    });
  };

  updateGroup = (e, groupIdx) => {
    let groupsCopy = this.state.groups;
    let groupCopy = groupsCopy[groupIdx];
    console.log("groupCopy", groupCopy)
    e.preventDefault();
    // TODO: move this to file that hold index() -above
    // does this need to be asynchronouse
    fetch('/api/groups/', {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + tokenService.getToken() 
      },
      body: JSON.stringify(groupCopy)
    }).then(response => console.log(response))
      const updateGroups = []
      groupsCopy.forEach( g => {
        if (g.id!==groupsCopy[groupIdx].id) {
            updateGroups.push(g)
          } else {
            updateGroups.push(groupCopy)
          }
        }  
      )
    this.setState(state => ({
      groups: [...updateGroups]
    }))
    
  };

  handleUpdateGroup = (e, groupIdx) => {
    console.log(groupIdx);
    
    let groupsCopy = this.state.groups;
    let groupCopy = groupsCopy[groupIdx];
    const userId = e.target.dataset.userid

    if (e.target.type !== "checkbox"){
      groupCopy[e.target.name] = e.target.value;
    } else {
      if (e.target.checked && !groupCopy.members.includes(userId)) {
        groupCopy.members.push(userId)
        console.log("userId",userId)
      } else {
        if (!e.target.checked) {
          const index = groupCopy.members.indexOf(userId);
          groupCopy.members.splice(index,1);
        }
      }
    }

    this.setState({ groups: groupsCopy });

    // existing code below
    // let newGroup = {...this.state.newGroup};
    // const userId = e.target.dataset.userid
    // if (e.target.type !== "checkbox"){
    //   newGroup[e.target.name] = e.target.value;
    // } else {
    //   if (e.target.checked && !newGroup.members.includes(userId)) {
    //   newGroup.members.push(userId)
    //   console.log("userId",userId)
    //   } else {
    //     if (!e.target.checked) {
    //       const index = newGroup.members.indexOf(userId);
    //       newGroup.members.splice(index,1);
    //     }
    //   }
    // }
    // this.setState({
    //   newGroup
    // });
  };
  
  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleDeleteGroup = (group) => {
    groupService.deleteGroup(group)
    .then(result => {
      const groups = this.state.groups.filter(g => group !== g._id);
      this.setState({groups});
      }
    )
    console.log("group in App", group);
  }

  render() {
    return (
      <div className="App">
        <NavBar
        triggerCreateGroup={this.handleCreateGroup}
        addGroup={this.addGroup}
        user={this.state.user}
        handleLogout={this.handleLogout}
        newGroup={this.state.newGroup}
        users={this.state.users}
        />        
        <Switch>  
          <Route exact path='/' render={ () => 
            <div className="App-landing"
            >
              <Landing/>
            </div>
          }/>
          <Route exact path='/profile' render={ () => (
            this.state.groups ? 
              <div className="App-profile">
                <Profile 
                  groups={this.state.groups}
                  handleDeleteGroup={this.handleDeleteGroup}
                  updateGroup={this.updateGroup}
                  handleUpdateGroup={this.handleUpdateGroup}
                  user={this.state.user}
                  newGroup={this.state.newGroup}
                  users={this.state.users}
                />
              </div>
            :
              <h3>Loading...</h3>
          )}/>
          <Route exact path='/group/:id' render={ () => 
            <div className="App-group">
              <Group/>
            </div>
          }/>
          <Route exact path='/login' render={({history}) =>
            <LoginPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/signup' render={({history}) =>
            <SignupPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
      </div>
    );
  }
}
export default App;
