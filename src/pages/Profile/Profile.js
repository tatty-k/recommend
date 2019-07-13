import React from 'react';
import './Profile.css'


const Profile = (props) => {
    return ( 
      
        <div className="grid-container">
            {props.groups.map((group, idx) => (
                <div className={`grid-item item${(idx%6)+1}`} >{group.name}</div>
            ))}
        </div>

    );
}
 
export default Profile;