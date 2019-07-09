import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { index } from './utils/groupsService'
import Landing from './pages/Landing/Landing.js';
import Profile from './pages/Profile/Profile.js';
import Group from './pages/Group/Group.js';


class App extends Component{

  state = {
    groups: [],
    users: []
  }

  async componentDidMount() {
    const groups = await index();
    console.log(groups);
    this.setState({ groups });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={ () => 
            <Landing/>
          }/>
          <Route exact path='/profile' render={ () => 
            <Profile
            scores={this.state.groups}
            />
          }/>
          <Route exact path='/group/:id' render={ () => 
            <Group/>
          }/>
        </Switch>
      </div>
    );
  }
}
export default App;
