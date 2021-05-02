import React from 'react';
import Project from '../Project/Project';
import Project1 from '../Image/Screenshot (46).png';
import Project2 from '../Image/Screenshot (47).png';
import Project3 from '../Image/Screenshot (48).png';
import Project4 from '../Image/Screenshot (49).png';
import './Projects.css';
import Typical from 'react-typical';

const Projects = () => {
    const projectDetails=[
        {
            photo:Project1,
            live:'https://luxury-living-cde62.web.app/',
            client:'https://github.com/mehedi-hasan-anik/lockSmith-client',
            server:'https://github.com/mehedi-hasan-anik/lockSmith-server',
            details:'This is a very useful website. Users can get this service by card payment and also can give reviews very easily. In dashboard two kinds of access as user or admin. Admin can add new service, can update or delete services, and can update service order status.',
            name:'LockSmith'
        },
        {
            photo:Project2,
            live:'https://bookshop-7a3f4.web.app/',
            client:'https://github.com/mehedi-hasan-anik/bookShop-client',
            server:'https://github.com/mehedi-hasan-anik/bookShop-server',
            details:'This is a kind of ecommerce website. You can buy any kind of book together. As an admin you can add any type of book to this website and you can also delete it.',
            name:'BookShop'
        },
        {
            photo:Project3,
            live:'https://gallant-beaver-776ef3.netlify.app/',
            client:'https://github.com/mehedi-hasan-anik/easyRide',
            server:'',
            details:'People benefit through this website. You can use this website to go anywhere in Bangladesh very easily and at low cost.',
            name:'EasyRaide'
        },
        {
            photo:Project4,
            live:'https://youthful-snyder-bc2c33.netlify.app/',
            client:'https://github.com/mehedi-hasan-anik/premierLeague',
            server:'',
            details:'you can get all details of english premier league teams. And this is a single page application.',
            name:'PremierLeague'
        }
    ]
    return (
       <div className="projects-full-area">
           <div className="container inner-projects">
               
           <h1>
              <Typical
                     steps={['ALL',1000, 'PROJECT', 1000]}
                     loop={Infinity}
                     wrapper="p"
               />             
           </h1>

               <div className="row">
                    {
                        projectDetails.map(event=><div className="col-md-6"><Project event={event} className></Project></div>)
                    }
              </div>
          </div>
       </div>
    );
};

export default Projects;