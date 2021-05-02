import React from 'react';
import './Skill.css';

const Skill = () => {
    return (
      <div className="full-skill-area">  
        <div className="container">
            <div className="wrap">
                <div className="bar">
                    <h3>HTML5 <abbr>80%</abbr></h3>
                    <span></span>
                </div>
                <div className="bar">
                    <h3>CSS3 <abbr>80%</abbr></h3>
                    <span></span>
                </div>
                <div className="bar">
                    <h3>JAVASCRIPT <abbr>70%</abbr></h3>
                    <span></span>
                </div>
                <div className="bar">
                    <h3>PHOTOSHOP <abbr>50%</abbr></h3>
                    <span></span>
                </div>
            </div>
        </div>
     </div>  
    );
};

export default Skill;