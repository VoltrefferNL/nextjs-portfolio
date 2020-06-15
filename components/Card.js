import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './card.module.css'
import projectImage from '../images/projects/ncNewsFinal.png'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
    const projectData = props.projectData
  return (
<div className={styles.project_container}>
<div className={styles.project__pic}>
    <a href="#">
        <img src={`${projectData.image}`} alt="project logo"/>
    </a>
</div>
<div className={styles.project_caption}>
        <div className={styles.project_name}>
          <a href={projectData.hosted} target="_blank">{projectData.title}</a>
        </div>
          <div>{projectData.stack.map((stack) => {
              return <span key={stack} className={styles.stack_button}>{stack}</span>
               })}
             </div>
        <p>{projectData.description}</p>
<div className={styles.project_links}><span><a href={projectData.github}><i className="fab fa-github icon"></i> Code</a></span>
                                     <span><a href={projectData.hosted}><i className="fas fa-desktop icon"></i> Live site</a></span></div>
      </div>
      
</div>
  );
}