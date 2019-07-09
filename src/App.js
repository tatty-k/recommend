import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { index } from './utils/groupsService'
import NavBar from './components/NavBar/NavBar.js';
import Landing from './pages/Landing/Landing.js';
import Profile from './pages/Profile/Profile.js';
import Group from './pages/Group/Group.js';


class App extends Component{
  constructor(props) {
    super(props);
    this.handleCreateGroup=
    this.handleCreateGroup.bind(this);
      this.state = {
        groups: [],
        // users: []
        newGroup: {}
      };
  }

  async componentDidMount() {
    const groups = await index();
    this.setState({
      groups
    });
    console.log(groups);
    console.log(this.state);
  };
  
  addGroup = e => {
    e.preventDefault();
    this.setState(state => ({
      groups: [...state.groups, state.newGroup],
      newGroup: {}  
    }));
  };

  handleCreateGroup = () => {
    console.log('handleCreateGroup clicked');
    let newGroup = {...this.state.newGroup};
    this.setState({
      newGroup
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar
        handleCreateGroup={this.handleCreateGroup}
        addGroup={this.addGroup}
        />
        <Switch>
          <Route exact path='/' render={ () => 
            <Landing/>
          }/>
          <Route exact path='/profile' render={ () => 
            <Profile
            groups={this.state.groups}
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
