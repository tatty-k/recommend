import React from 'react';
import './GettingStarted.css';
// import step1 from '../../images/step1.png';

const showHideSteps = () => {
    console.log("clicked")
    let x = document.getElementById("step1");
    let y = document.getElementById("step1Pic")
     if ( x = x) {
         x.innerText = y;
     } else {
         x.innerContent = x;
     }
 }

const GettingStarted = () => {
    return (
        <div className="gs-container">
            <div className="gs-title">Getting Started!</div>
            <div className= "gs-column-container">

                <div onClick={showHideSteps} className="gs-item1 gs-item" id="step1">
                    1. Click the add group button to create your groups  
                </div>

                <div className="gs-item2 gs-item" id="step1Pic">
                    {/* <img src={step1} alt="step-1 picture"/> */}
                </div>
                     
                <div className="gs-item3 gs-item ">
                    2. Name your group and add members
                </div>

                <div className="gs-item4 gs-item ">
                    picture
                </div>

                <div className="gs-item5 gs-item ">
                    3. Click on the group name to enter the group page
                </div>
                <div className="gs-item6 gs-item ">
                    picture
                </div>   
            </div>
        </div>
     );
}
 
export default GettingStarted;