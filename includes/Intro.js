import React from 'react';
import styles from "../styles/index.module.css";
import IntroText from '../pages/content/IntroText';


const Intro = () => {
    return (
<div className={styles.container}>
<div className={styles.avatar}>
  <img src={require("../images/0.jpg")} className={styles.profilePic} />
</div>
<div className={styles.introtext}>
  <IntroText />
</div>
</div>
    );
};

export default Intro