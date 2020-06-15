import React from 'react';
import { menuLinks } from "../../data/Menu";
import styles from "./navbar.module.css";
import Link from "next/link";


const MobileMenuLayout = () => {
    return (
        <div>
        <div className={styles.logomenu}>De visser.Tech</div>
        <ul className={styles.menu_nav_mobile}>
        {menuLinks.map(({path, name}) => (
          <li key={name}>
            <Link href={path} as={path}>
              <a className={styles.phoneLink}>{name}</a>
            </Link>
          </li>
             ))} 
        
    </ul>
    </div>
    );
};

export default MobileMenuLayout;