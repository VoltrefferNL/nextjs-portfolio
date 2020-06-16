import React from 'react';
import {projectsData} from '../data/Projects';
import Card from '../components/Card';
import styles from "../styles/index.module.css";

const Projects = () => {
    return (
        
<<<<<<< HEAD
        <div className={styles.container_section}>
=======
        <div className="container_section">
>>>>>>> 1750aa74f13ee984b84ed9bae2e115d480abd34b
            <div className={styles.featured__projects}>
              {projectsData.map((project) => (<Card projectData={project} key={project}/>))}
              </div>
        </div>
        
    );
};

export default Projects;
