import React from 'react';
import './AboutMe.css';
import MyPhoto from '../Image/Untitled-4.png';

const AboutMe = () => {
    return (
       <div className="full-about-area">
         <div className="container">
            <div className="about-area row">
                <div className="about-photo-area col-md-6">
                     <img src={MyPhoto} alt="" className="img-fluid" style={{height:'600px',width:'80%'}}/>
                </div>
                <div className="about-details-area col-md-6 d-flex  align-items-center">
                    <div>
                        <h2>I AM MD. <span style={{color:'white'}}>ANIK MIAH</span></h2>
                        <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>

                        <h6>Full Name : Md.Anik Miah</h6>
                        <h6>Age : 24</h6>
                        <h6>Nationality: Bangladeshi</h6>
                        <h6>Language : Bangla,English</h6>
                        <h6>Address: Dhaka,Bangladesh</h6>
                        <h6>Freelance: Available</h6>
                    </div>
                </div>
            </div>
            
        </div>
       </div>
    );
};

export default AboutMe;