import React from 'react';
import './Profile.css'


const Profile = (props) => {
    return ( 
      
        <div className="grid-container">
            {props.groups.map((group, idx) => (
                <div className={`grid-item item${(idx%6)+1}`} >
                {group.name}
                <br></br>
                <button onClick={()=> props.handleDeleteGroup(group._id)}>DELETE</button>
                </div>            
            ))}
        </div>

    );
}
 
export default Profile;