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
        
        <form onSubmit={this.addGroup}>
          <label>
            <div>GROUP NAME</div>
            <input
              name="name"
              type="text"
              value={this.state.newGroup.group}
              onChange={this.handleCreateGroup}
              required
            />
            </label>
            <label>
            <div>DESCRIPTION</div>
            <input
              name="description"
              type="text"
              value={this.state.newGroup.description}
              onChange={this.handleCreateGroup}
              required
            />
            </label>
            <label>
            {/* <div>MEMBERS</div>   */}
            {/* TODO: make this a search */}
            {/* <select
              name="members"
              type="text"
              TODO:
              value={}
              onChange={}
              > 
              <option value="1">Sally Mea</option>
            </select> */}
          </label>
        
      
      <div>
        {/* maybe change to input with type submit */}
        <button
        onClick={this.addGroup}
        //  type="submit" 
        // value="Add Group"
        className="btn btn-primary"
        >
        Add Group
        </button>
      </div>
      </form>

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
