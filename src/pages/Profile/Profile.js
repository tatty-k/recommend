import React from 'react';

const Profile = (props) => {
    return ( 
        <div>
        Hello from profile
        {props.groups.map(group => (
            <div>
            <div>{group.name}</div>
            </div>
        ))}
        </div>
     );
}
 
export default Profile;