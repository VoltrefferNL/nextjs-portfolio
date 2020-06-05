import React from "react";
import Link from "next/link";
import styles from "./socials.module.css";

const Twitter = "https://twitter.com/DeVoltreffer";
const Github = "https://github.com/VoltrefferNL";
const Linkedin = "https://www.linkedin.com/in/niels-de-visser-5b718412a/";
const Email = "mailto:niels@devisser.tech";

const socials = () => {
  return (
    <div className={styles.socials}>
      <ul>
  <li>
    <a href={Twitter}><i className="fab fa-twitter icon"></i></a>
  </li>
  <li>
    <a href={Github}><i className="fab fa-github icon"></i></a></li>
  <li>
    <a href={Linkedin}><i className="fab fa-linkedin-in icon"></i></a></li>
    <li>
    <a href={Email}><i className="fas fa-envelope icon"></i></a></li>
</ul>
    </div>
  );
};

export default socials;
