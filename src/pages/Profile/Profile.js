import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'

const Profile = (props) => {

    return ( 
      
        <div className="profile-grid-container">
            {props.groups.map((group, idx) => (
                <div key={idx} className={`profile-grid-item profile-item${(idx%6)+1}`} >
                    <div className="profile-group-name">
                    <Link
                        className={`profile-grid-item profile-item${(idx%6)+1}`}
                        to={`/group/${idx}`}>{group.name}</Link>
                    </div>
                    <div className= "profile-btn-container">
                        <button 
                        className="btn btn-light group-btn"
                        onClick={()=> props.handleDeleteGroup(group._id)}
                        >
                            DELETE
                        </button>
                        <Link
                        className="btn btn-light group-btn"
                        to={`/update-group/${idx}`}>EDIT</Link>
                    </div>
                </div>            
            ))}
        </div>

    );
}
 
export default Profile;