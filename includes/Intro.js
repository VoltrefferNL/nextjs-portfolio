import React from 'react';
import styles from "../styles/index.module.css";
import IntroText from '../pages/content/IntroText';
import Socials from '../components/Socials';


const Intro = () => {
    return (
<div className={styles.container_section}>
<div className={styles.introtext}>
  <IntroText />
  <Socials />
</div>
</div>
    );
};

export default Intro