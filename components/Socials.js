import React from "react";
import Link from "next/link";
import styles from "./socials.module.css";
import { Twitter, Github, Linkedin, Email } from "../data/SocialData";


const Socials = () => {
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

export default Socials;
