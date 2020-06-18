import React from 'react';
import {projectsData} from '../data/Projects';
import Card from '../components/Card';


const Projects = () => {
    return (
        
        <div className="container_section">
            <div>
            {projectsData.map((project) => (<Card projectData={project} key={project.title}/>))}
            </div>
        </div>
        
    );
};

export default Projects;
