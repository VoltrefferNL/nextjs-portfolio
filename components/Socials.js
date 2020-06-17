import React from "react";
import Link from "next/link";
import styles from "./socials.module.css";
import { Twitter, Github, Linkedin, Email } from "../data/SocialData";


const Socials = () => {
  return (
          <ul className="socials">
  <li>
    <a href={Twitter}><i className="fab fa-twitter icon"></i></a>
  </li>
  <li>
    <a href={Github}><i className="fab fa-github icon"></i></a></li>
  <li>
    <a href={Linkedin}><i className="fab fa-linkedin-in icon"></i></a></li>
    </ul>
    
  );
};

export default Socials;
