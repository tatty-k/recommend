import React from 'react';
import './UpdateGroup.css'

function UpdateGroup(props){
    return (              
        <div className='UpdateGroup'>
            <header className='header-footer'>Edit Group</header>
            <form onSubmit={(e) => props.updateGroup(e, props.idx)}>
            
                <div className="form-group">
                    <label>GROUP NAME</label>
                    <input
                        name="name"
                        type="text"
                        onChange={(e) => props.handleUpdateGroup(e, props.match.params.id) }
                        value={props.groups[props.match.params.id].name}
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>DESCRIPTION</label>
                    <input
                        name="description"
                        type="text"
                        onChange={(e) => props.handleUpdateGroup(e, props.match.params.id) }
                        value={props.groups[props.match.params.id].description}
                        required
                        className="form-control"
                    />
                </div>
                { props.users.map((user, idx) => (
                <label key={idx}>
                <div>{user.name}</div>  
                <input 
                    name={user.email}
                    type="checkbox"
                    onChange={(e) => props.handleUpdateGroup(e, props.match.params.id) }
                    data-userid={user._id}
                    checked={props.groups[props.match.params.id].members.includes(user._id)}
                />
                </label> 
                ))} 
            <div>
                <input
                    onClick={(e) => props.updateGroup(e, props.match.params.id)}
                    type="submit" 
                    value="Submit"
                    className="btn btn-primary"
                    data-dismiss="modal"
                />
            </div>
            </form>
        {/* <pre>{JSON.stringify(props.group, null, 4)}</pre> */}
      
        </div>
    );
}
 
export default UpdateGroup;