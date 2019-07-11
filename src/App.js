import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { index } from './utils/groupsService'
import NavBar from './components/NavBar/NavBar.js';
import Landing from './pages/Landing/Landing.js';
import Profile from './pages/Profile/Profile.js';
import Group from './pages/Group/Group.js';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import './images/LandingBackground.png';
import userService from './utils/userService';

class App extends Component{
      state = {
        groups: [],
        // users: []
        newGroup: {
          name: '',
          description: ''
        },
        user: userService.getUser()
      };

  async componentDidMount() {
    const groups = await index();
    this.setState({
      groups
    });
    console.log(groups);
    console.log(this.state);
  };
  
  addGroup = e => {
    console.log("add group clicked")
    e.preventDefault();
    // TODO: move this to file that hold index() -above
    // does this need to be asynchronouse
    fetch('/api/groups', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.newGroup)
    })
    //this.props.history.push('/profile');
  };

  handleCreateGroup = e => {
    console.log('handleCreateGroup clicked');
    let newGroup = {...this.state.newGroup};
    newGroup[e.target.name] = e.target.value;
    this.setState({
      newGroup
    });
  };
  
  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div className="App">
        <NavBar
        triggerCreateGroup={this.handleCreateGroup}
        addGroup={this.addGroup}
        user={this.state.user}
        handleLogout={this.handleLogout}
        />        
        <Switch>
          <Route exact path='/' render={ () => 
            <div className="App-landing"
            >
              <Landing/>
            </div>
          }/>
          <Route exact path='/profile' render={ () => 
            <div className="App-profile">
              <Profile
                groups={this.state.groups}
              />
            </div>
          }/>
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
