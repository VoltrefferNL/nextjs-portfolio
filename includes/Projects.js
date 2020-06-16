import React from 'react';
import {projectsData} from '../data/Projects';
import Card from '../components/Card';
import styles from "../styles/index.module.css";

const Projects = () => {
    return (
        
        <div className={styles.container_section}>
            <div className={styles.featured__projects}>
              {projectsData.map((project) => (<Card projectData={project}/>))}
              </div>
        </div>
        
    );
};

export default Projects;