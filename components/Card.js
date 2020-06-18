import React from 'react';


export default function MediaCard(props) {
    const projectData = props.projectData
  return (
<div className="project_container">
<div className="project__pic">
    <a href={projectData.hosted}>
        <img src={`${projectData.image}`} alt="project logo"/>
    </a>
</div>
<div className="project_caption">
        <div className="project_title">
          <a href={projectData.hosted} target="_blank" className="project_title">{projectData.title}</a>
        </div>
          <div>{projectData.stack.map((stack) => {
              return <span key={stack} className="stack_button">{stack}</span>
               })}
             </div>
        <p>{projectData.description}</p>
        <p>{projectData.timeframe}</p>
  <div className="project_links">
    <span className="underline_links"><a href={projectData.github}><i className="fab fa-github icon"></i> Code</a></span>
    <span className="underline_links"><a href={projectData.hosted}><i className="fas fa-desktop icon"></i> Live Demo</a></span></div>
  </div>
      
</div>
  );
}