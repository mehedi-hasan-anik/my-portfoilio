import React from 'react';
import './Home.css';
import Photo from '../Image/Untitled-4_50.png';
import Cv from '../Image/my-cv-final.pdf'
import Typical from 'react-typical';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
import Skill from '../Skill/Skill';


const Home = () => {
    return (
        <div className="home-full-area">

           <div className="container">
                   <div className="home-top-area">
                        <div className="row">
                            <div className="col-md-6  d-flex  align-items-center text-area">
                                <div className="justify-content-center download-area">
                                  <h1>     
                                        <Typical
                                            steps={['HELLO',1000,'&',1000, 'WELLCOME', 1000]}
                                            loop={Infinity}
                                            wrapper="p"
                                        />
                                  </h1>
                                        <h5 style={{color:'white'}}>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</h5>
                                        <a href={Cv} download style={{background:'#007ACC',color:'white'}}>Get Resume</a>
                                </div>
                            </div>
                                <div className="col-md-6" style={{textAlign:'right'}}>
                                    <img src={Photo} alt="" className="img-fluid" style={{height:'600px',width:'80%'}}/>
                                </div>
                        </div>
                </div>
               
                
            </div>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Resume></Resume>
            <Contact></Contact>
            <Skill></Skill>
        </div>
    );
};

export default Home;