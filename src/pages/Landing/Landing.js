import React from 'react';
import './Landing.css';
import {Link} from 'react-router-dom'

const Landing = () => {
    return ( 
        <div className="outer-div">
            <div className="landing-container">
                <div className="landing-title">Looking for a quick, fun way to keep recommendation organized?</div>
                <Link to='getting-started' className="landing-demo">Click here to see how Recommend can help!</Link>
            </div>
        </div>
     );
}
 
export default Landing;