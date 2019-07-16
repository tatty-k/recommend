import React, {Component} from 'react';
import groupService from '../../utils/groupsService';

class Group extends Component {
    state = { 
        newRec: {
            recTitle: '',
            recDetails: ''
        },
        recommendations: []
    }


  addRec = (e) => {
    e.preventDefault();
    
    let newRecCopy = this.state.newRec;
    newRecCopy.groupId = this.props.groups[this.props.match.params.id]._id;
    
    //TODO make this function
    groupService.createRec(newRecCopy);
    
    
    this.setState(state => ({
    //   need to "pass groups up"...but how
    //   groups: [...state.groups, state.newGroup],
      newRec: { groupId: null, recTitle: '', recDetails: ''}
    })) 
  };

  handleChange = (e) => {
      let newRecCopy = this.state.newRec;
      newRecCopy[e.target.name] = e.target.value;

      this.setState({ newRec: newRecCopy });
  };

    render() { 
        return ( 
            <div>
            <form onSubmit={this.addRec}>
            <label>
                <div>RECOMMENDATION TITLE</div>
                <input
                    name="recTitle"
                    type="text"
                    onChange={ this.handleChange }
                    value={this.state.newRec.recTitle}
                    required
                />
                </label>
                <label>
                <div>RECOMMENDATION DETAILS</div>
                <input
                    name="recDetails"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.newRec.recDetails}
                    required
                />
                </label>
                <input
                    onClick={this.addRec}
                    type="submit" 
                    value="ADD RECOMMENDATION"
                    className="btn btn-primary"
                    data-dismiss="modal"
                />
            </form>
        {/* <pre>{JSON.stringify(props.group, null, 4)}</pre> */}
       
        </div>
        
        );
    }
}
 
export default Group;
