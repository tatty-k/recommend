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


    componentDidMount = async () => {
        // this.addRec();
        await this.props.handleSignupOrLogin();
        let loadedRecs = this.props.groups[this.props.match.params.id].recs || null;

        this.setState({
           recommendations: loadedRecs
        })
    } 


  addRec = async (e) => {
    e.preventDefault();
    
    let newRecCopy = this.state.newRec;
    // adds groupId to newRec so rec can be pushed into the correct group
    // when it gets to the controller
    newRecCopy.groupId = this.props.groups[this.props.match.params.id]._id;
    // connects to fetch request that sends rec to controller
    let rec = await groupService.createRec(newRecCopy);

    this.setState({
        recommendations: rec,
        newRec: { groupId: null, recTitle: 'recommend something!', recDetails: ''}
    })
    
    document.getElementById("showRec").style.display = "none";
    
  };

  handleChange = e => {
      let newRecCopy = {...this.state.newRec};
      newRecCopy[e.target.name] = e.target.value;

      this.setState({ newRec: newRecCopy });
  };

    showHideRecForm = () => {
       let x = document.getElementById("showRec");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    render() { 
        return ( 
            this.state.recommendations ?
            <div>
                <div> 
                <div onClick={this.showHideRecForm } id="addRec">ADD RECOMMENDATION</div>  
                    <div> 
                        <form id="showRec" className="form-horizontal" onSubmit={this.addRec}>
                            <div className="form-group col-sm-12">
                                <input
                                    className="form-control"
                                    name="recTitle"
                                    type="text"
                                    onChange={ this.handleChange }
                                    value={this.state.newRec.recTitle}
                                    required
                                    placeholder="What do you recommend?"
                                />
                            </div>
                            <div className="form-group col-sm-12">
                                <input
                                    className="form-control"
                                    name="recDetails"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.newRec.recDetails}
                                    required
                                    placeholder="Add a brief description"

                                />
                            </div>
                            <div className="form-group col-sm-12 text-center">
                                <input
                                    className="form-control"
                                    onClick={this.addRec}
                                    type="submit" 
                                    value="ADD"
                                    className="btn btn-light"
                                    data-dismiss="modal"
                                />
                            </div>
                        </form>
                    </div>
                </div>
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
