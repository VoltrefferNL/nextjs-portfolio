import React from 'react';
import Socials from '../components/Socials';

const Intro = () => {
    return (
<div className="container_introduction">

<h1 className="introduction_name">Hi!</h1>
  
<h2 className="introduction_subtext">
I'm <span className="bold underline_email">Niels de Visser</span>, a fullstack software developer that has just entered the tech space.
Passionate about coding, learning new skills, travelling and riding my bike.
 </h2>

 <h3 className="introduction_subtext">I'm currently activly looking for a Junior Developer position. <span className="underline_email"><a href="/CV-NielsdeVisser.pdf" download>You can find my CV here.</a></span></h3>

<h3 className="introduction_email"><span>Want to discuss something?</span> <span className="underline_email"><a href="mailto:niels@devisser.tech" target="_blank">Niels@deVisser.tech</a></span></h3>
    
  <Socials />
</div>
    );
};

export default Intro