import React from 'react';
import {projectsData} from '../data/Projects';
import Card from '../components/Card';
import styles from "../styles/index.module.css";

const Projects = () => {
    return (
        
        <div className="trythis">
            <div className={styles.featured__projects}>
              {projectsData.map((project) => (<Card projectData={project} key={project}/>))}
              </div>
        </div>
        
    );
};

export default Projects;
