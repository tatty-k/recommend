import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { index } from './utils/groupsService'
import NavBar from './components/NavBar/NavBar.js';
import Landing from './pages/Landing/Landing.js';
import Profile from './pages/Profile/Profile.js';
import Group from './pages/Group/Group.js';

class App extends Component{
      state = {
        groups: [],
        // users: []
        newGroup: {
          name: '',
          description: ''
        }
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
  };

  handleCreateGroup = e => {
    console.log('handleCreateGroup clicked');
    let newGroup = {...this.state.newGroup};
    newGroup[e.target.name] = e.target.value;
    this.setState({
      newGroup
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar
        triggerCreateGroup={this.handleCreateGroup}
        addGroup={this.addGroup}
        />        
        <Switch>
          <Route exact path='/' render={ () => 
            <div className="App-landing">
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
        </Switch>
      </div>
    );
  }
}
export default App;
