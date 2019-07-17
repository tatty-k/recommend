import React, {Component} from 'react';
import groupService from '../../utils/groupsService';
import './Group.css'

class Group extends Component {
    state = { 
        newRec: {
            recTitle: '',
            recDetails: ''
        },
        recommendations: []
    }


    componentDidMount = () => {
        let loadedRecs = this.props.groups[this.props.match.params.id].recs || null;
        // console.log(this.props.groups[this.props.match.params.id]);
        // groups array is empty
        // try componentDidUpdate with guard operator 

        this.setState({
           recommendations: loadedRecs
        })
    } 


  addRec = async (e) => {
    e.preventDefault();
    
    let newRecCopy = this.state.newRec;
    newRecCopy.groupId = this.props.groups[this.props.match.params.id]._id;
    
    let rec = await groupService.createRec(newRecCopy);

    this.setState({
        recommendations: rec,
        newRec: { groupId: null, recTitle: 'recommend something!', recDetails: ''}
    })
  };

  handleChange = (e) => {
      let newRecCopy = this.state.newRec;
      newRecCopy[e.target.name] = e.target.value;

      this.setState({ newRec: newRecCopy });
  };

    render() { 
        return ( 
            this.state.recommendations ?
            <div>
            <form className="group-form form-inline" onSubmit={this.addRec}>
                <label className="form-group mb-2">
                    {/* <div>RECOMMENDATION TITLE</div> */}
                    <input
                        className="group-form-input"
                        name="recTitle"
                        type="text"
                        onChange={ this.handleChange }
                        value={this.state.newRec.recTitle}
                        required
                    />
                    </label>
                    {/* <label>
                    <div>RECOMMENDATION DETAILS</div>
                    <input
                        name="recDetails"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.newRec.recDetails}
                        required
                    />
                    </label> */}
                    <input
                        className="group-form-submit"
                        onClick={this.addRec}
                        type="submit" 
                        value="ADD"
                        className="btn btn-light"
                        data-dismiss="modal"
                    />
            </form>
        {/* <pre>{JSON.stringify(props.group, null, 4)}</pre> */}
       
            <div className="group-grid-container">
                {this.state.recommendations.map( (rec, idx) => 
                    <div key={idx} className={`group-grid-item group-item${(idx%8)+1}`} >
                    {rec.recTitle}
                    </div>
                )}
            </div>
        </div>
        :
        "Loading..."
        
        );
    }
}
 
export default Group;
