import React from 'react';
import './Project.css'

const Project = ({event}) => {
    return (
        <div className="project-full-area">
           <div className="container">
                <div className="card m-3 p-3 card-area">
                    <img src={event.photo} alt=""/>
                    <h2 className="mt-3">{event.name}</h2>
                    <p>{event.details}</p>
                    <ul>
                        <li><a href={event.live} target="_blank">Live</a></li>
                        <li><a href={event.client} target="_blank">client</a></li>
                        {
                            event.server && <li><a href={event.server} target="_blank">server</a></li>
                        }
                    </ul> 
                </div>
           </div>
        </div>
    );
};

export default Project;