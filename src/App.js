import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js';
import Landing from './pages/Landing/Landing.js';
import GettingStarted from './pages/GettingStarted/GettingStarted';
import Profile from './pages/Profile/Profile.js';
import Group from './pages/Group/Group.js';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import './images/LandingBackground.png';
import groupService from './utils/groupsService';
import userService from './utils/userService';
import tokenService from './utils/tokenService';
import UpdateGroup from './components/UpdateGroup/UpdateGroup';

class App extends Component{
      state = {
        groups: [],
        users: [],
        selectedGroupIdx: "",
        newGroup: {
          name: '',
          description: '',
          members: []
        },
        user: userService.getUser()
      };

  componentDidMount() {
      this.handleSignupOrLogin();
  };

  handleSignupOrLogin =  async () => {
    const groups = await groupService.index();
    const users = await userService.userIndex();

    this.setState({
      user: userService.getUser(),
      groups,
      users
    });

  }
  
  addGroup = e => {
    e.preventDefault();
    groupService.create(this.state.newGroup);
    this.setState(state => ({
      groups: [...state.groups, state.newGroup],
      newGroup: { name: '', description: '', members:[]}
    }))
  };

  handleCreateGroup = e => {
    let newGroupCopy = {...this.state.newGroup};
    //userId corresponds to different users that can be selected via checkbox 
    const userId = e.target.dataset.userid;
    if (e.target.type !== "checkbox"){
      newGroupCopy[e.target.name] = e.target.value;
    } else {
      //users that are selected and not already in the groups members array
      // get pushed to groups members array
      if (e.target.checked && !newGroupCopy.members.includes(userId)) {
      newGroupCopy.members.push(userId)
      console.log("userId",userId)
    } else {
      //removes user from members array when checkbox is unchecked
      if (!e.target.checked) {
        const index = newGroupCopy.members.indexOf(userId);
        newGroupCopy.members.splice(index,1);
      }
    }
  }  
    this.setState({
      newGroup : newGroupCopy
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
        if (g._id!==groupsCopy[groupIdx]._id) {
          console.log("g",g)
          console.log("groupsCopy[groupIdx]", groupsCopy[groupIdx])
            updateGroups.push(g)
          } else {
            updateGroups.push(groupCopy)
          }
        } 
      )
      console.log(updateGroups) 
    this.setState(state => ({
      groups: [...updateGroups]
    }))
    this.props.history.push('/profile');
  };

  handleUpdateGroup = (e, groupIdx) => {
    console.log(groupIdx);
    
    let groupsCopy = this.state.groups;
    let groupCopy = groupsCopy[groupIdx];
    const userId = e.target.dataset.userid

    if (e.target.type !== "checkbox"){
      console.log(e.target.type);
      groupCopy[e.target.name] = e.target.value;
    } else {
      if (e.target.checked && !groupCopy.members.includes(userId)) {
        console.log(e.target.checked);
        groupCopy.members.push(userId)
        console.log("userId",userId)
      } else {
        if (!e.target.checked) {
          console.log(e.target.checked);
          const index = groupCopy.members.indexOf(userId);
          groupCopy.members.splice(index,1);
        }
      }
    }

    this.setState({ groups: groupsCopy });

  };

  handleDeleteGroup = (group) => {
    groupService.deleteGroup(group)
    .then(result => {
      const groups = this.state.groups.filter(g => group !== g._id);
      this.setState({groups});
      }
    )
  }
  
  handleLogout = () => {
    userService.logout();
    this.setState({
      user: null,
      groups: null,
      users: null
    });
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
          <Route exact path='/getting-started' render={ () => 
              <div className="App-getting-started">
              <GettingStarted/>
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
          <Route exact path='/group/:id' render={ (props) => 
            <div className="App-group">
              <Group
              {...props}
              groups={this.state.groups}
              handleSignupOrLogin={this.handleSignupOrLogin}
              />
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
          <Route path='/update-group/:id' render={(props) =>
            <UpdateGroup
              {...props}
              handleUpdateGroup={this.handleUpdateGroup}
              updateGroup={this.updateGroup}
              user={this.state.user}
              newGroup={this.state.newGroup}
              users={this.state.users}
              groups={this.state.groups}
            />
          }/>
        </Switch>
      </div>
    );
  }
}
export default App;
