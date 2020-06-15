import React, { useEffect } from "react";
import styles from "../content/content.module.css"

const Twitter = "https://twitter.com/DeVoltreffer";
const Github = "https://github.com/VoltrefferNL";
const Linkedin = "https://www.linkedin.com/in/niels-de-visser-5b718412a/";


const IntroText = () => {
  return (
    <div>

<span><h5>Hi! I'm <span className="bold">Niels</span>,</h5></span>
  
<span><h6>
  
   <span>I am Fullstack Software Developer that has just entered the Tech space. Passionate about coding, learning new skills, travelling and riding my bike.</span> <br/> <br/> <span>Would you like to know more about me? Check out my projects on <span className="bold"><a href={Github} >Github</a></span>, read some of my blog post on my <span className="bold"><a href={Linkedin} >LinkedIn</a></span> or reach out on <span className="bold"><a href={Twitter} >Twitter</a></span></span>. 
<br></br><br></br>
I am currently updating my portfolio, please comeback soon.</h6></span>  



    </div>
  );
};

export default IntroText;
