import React from 'react';
import Footer from '../Footer/Footer';
import './Contact.css';
import Typical from 'react-typical';

const Contact = () => {
    
    return (
      <div className="full-contact-area">  
       <div className="container inner-contact-area">
                                 <h2>     
                                        <Typical
                                            steps={['CONTACT',1000,'&',1000, 'CONTACT', 1000]}
                                            loop={Infinity}
                                            wrapper="p"
                                        />
                                  </h2>
           <div className="form-area ">
               <div className="inner-form-area ">
                 <form action="https://formcarry.com/s/JPbGpbi0qPn" method="POST" accept-charset="UTF-8" >

                    <input type="email" name="email" placeholder="Enter Your Email"/><br/>
                    <input type="text" name="firstName"  placeholder="Enter Your FirstName"/><br/>
                    <input type="text" name="lastName"  placeholder="Enter Your LastName"/><br/>
                    <textarea type="text" name="lastName"  placeholder="Description"></textarea><br/>
                    <input type="submit" style={{background:'blue',color:'white'}}/>
                 </form> 
               </div>
           </div>
           <Footer></Footer>
       </div>
       </div>  
    );
};

export default Contact;