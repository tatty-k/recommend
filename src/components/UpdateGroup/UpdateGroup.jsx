import React from 'react';

function UpdateGroup(props){
    return (              
 
        <div>

            <form onSubmit={(e) => props.updateGroup(e, props.idx)}>
            <label>
                <div>GROUP NAME</div>
                <input
                    name="name"
                    type="text"
                    onChange={(e) => props.handleUpdateGroup(e, props.idx) }
                    value={props.group.name}
                    required
                />
                </label>
                <label>
                <div>DESCRIPTION</div>
                <input
                    name="description"
                    type="text"
                    onChange={(e) => props.handleUpdateGroup(e, props.idx) }
                    value={props.group.description}
                    required
                />
                </label>
                { props.users.map((user, idx) => (
                <label key={idx}>
                <div>{user.name}</div>  
                <input 
                    name={user.email}
                    type="checkbox"
                    onChange={(e) => props.handleUpdateGroup(e, props.idx) }
                    data-userid={user._id}
                    checked={props.group.members.includes(user._id)}
                />
                </label> 
                ))} 
            <div>
                <input
                    onClick={(e) => props.updateGroup(e, props.idx)}
                    type="submit" 
                    value="Update Group"
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