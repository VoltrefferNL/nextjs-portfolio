import Link from "next/link";
import styles from "./navbar.module.css";
import React, {useState} from "react";
import Hamburger from 'react-hamburgers';

const Menu = [
  {
    path: "/blog", name: "Blog",
  },
  {
    path: "/#", name: "100DaysofCode",
  },

  ]

function Navbar() {
const [showMenu, setShowMenu] = useState(false);
const [activeHam, setHamburger] = useState(false)

let menu
if (showMenu){
  menu = <div className={styles.menu_white}>
    <div className={styles.menu_nav_mobile}>{Menu.map(({path, name}) => (
    <li key={name}>
      <Link href={path} as={path}>
        <a>{name}</a>
      </Link>
    </li>))}</div>
    </div> 
}

return (
  
  <header className={styles.header_Wrapper}>
  <div className={styles.div_top_hypers}>
    <div className={styles.logo_left}>NdV</div>
    <div></div>
    <ul className={styles.ul_top_hypers}>
           {Menu.map(({path, name}) => (
      <li key={name}>
        <Link href={path} as={path}>
          <a>{name}</a>
        </Link>
      </li>

     ))} 
      </ul>
       </div>
       <div className={styles.menu_right}><span onClick={() => {setShowMenu(!showMenu)}}>
       <i className="fa fa-bars"></i>        
       </span></div>
       
       <div> 
      {menu}
      </div>
  </header>
  )
  

         }
export default Navbar;
