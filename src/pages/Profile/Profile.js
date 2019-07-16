import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'
// import UpdateGroup from '../../components/UpdateGroup/UpdateGroup';


const Profile = (props) => {
    return ( 
      
        <div className="profile-grid-container">
            {props.groups.map((group, idx) => (
                <div className={`profile-grid-item profile-item${(idx%6)+1}`} >
                    <div className="profile-group-name">
                        {group.name}
                    </div>
                    <div className= "profile-btn-container">
                        <button 
                        className="btn btn-light"
                        onClick={()=> props.handleDeleteGroup(group._id)}
                        >
                            DELETE
                        </button>
                        <Link
                        className="btn btn-light"
                        to={`/update-group/${idx}`}>EDIT</Link>
                        {/* <button className="btn btn-primary mr-1" onClick={(e) => props.updateGroup(e, props.idx)}>Edit</button> */}
                            {/* <UpdateGroup
                            handleUpdateGroup={props.handleUpdateGroup}
                            updateGroup={props.updateGroup}
                            user={props.user}
                            newGroup={props.newGroup}
                            users={props.users}
                            group={group}
                            idx={idx}
                            />  */}
                    </div>
                </div>            
            ))}
        </div>

    );
}
 
export default Profile;