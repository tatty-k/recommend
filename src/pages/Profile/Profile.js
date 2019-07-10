import React from 'react';
import './Profile.css'

const Profile = (props) => {
    return ( 
        <div className="groups">
            {props.groups.map(group => (
                <div className="group">{group.name}</div>
            ))}
        </div>
     );
}
 
export default Profile;