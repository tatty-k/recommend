import React from 'react';
import step1a from '../../images/step1a.png';
import step1b from '../../images/step1b.png';
import step2 from '../../images/step2.png';
import step3 from '../../images/step3.png';
import step4 from '../../images/step4.png';
import step5 from '../../images/step5.png';
import step6 from '../../images/step6.png';
import step7 from '../../images/step7.png';
import './GettingStarted.css'


const GettingStartedSlides = () => {
    return ( 

    <div className="slide-container">
        <div className="slide-info">
                1. Click the add group button to create your groups  
        </div>
        <img className="slide-img" src={step1a} alt="step-1 picture"/>
        <img className="slide-img" src={step1b} alt="step-1 picture"/>
     
        <div className="slide-info">
            2. Name your group and add members
        </div>
        <img className="slide-img" src={step2} alt="step-1 picture"/>

        <div className="slide-info">
            3. Click on the group name to enter the group page
        </div>
        <img className="slide-img" src={step3} alt="step-1 picture"/>

        <div className="slide-info">
            4. Once in your groups page, create a recommendation by clicking on the add recommendation button
        </div>
        <img className="slide-img" src={step4} alt="step-1 picture"/>

        <div className="slide-info">
            5. Fill out the recommendation form
        </div>
        <img className="slide-img" src={step5} alt="step-1 picture"/>

        <div className="slide-info">
            6. After clicking add on the recommendation form, your new recommendation should appear in your group
        </div>
        <img className="slide-img" src={step6} alt="step-1 picture"/>

        <div className="slide-info">
            7. Continue adding recommendations!
        </div>
        <img className="slide-img" src={step7} alt="step-1 picture"/>

    </div>

     );
}
 
export default GettingStartedSlides;