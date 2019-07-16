import React from 'react';
import './Profile.css'
import UpdateGroup from '../../components/UpdateGroup/UpdateGroup';


const Profile = (props) => {
    return ( 
      
        <div className="grid-container">
            {props.groups.map((group, idx) => (
                <div className={`grid-item item${(idx%6)+1}`} >
                {group.name}
                <button 
                onClick={()=> props.handleDeleteGroup(group._id)}
                >
                    DELETE
                </button>
                    <UpdateGroup
                      handleUpdateGroup={props.handleUpdateGroup}
                      updateGroup={props.updateGroup}
                      user={props.user}
                      newGroup={props.newGroup}
                      users={props.users}
                      group={group}
                      idx={idx}
                    /> 
                </div>            
            ))}
        </div>

    );
}
 
export default Profile;