import Link from "next/link";
import styles from "./navbar.module.css";
import React, {useState} from "react";
import { menuLinks } from "../../data/Menu"
import MobileMenuLayout from "./MobileMenuLayout";


function Navbar() {
const [showMenu, setShowMenu] = useState(false);


let mobileMenu
if (showMenu){
  mobileMenu = <div className={styles.menu_white}>
  <MobileMenuLayout />
    </div> 
}

return (
  
  <header className={styles.header_Wrapper}>
  <div className={styles.div_top_hypers}>
    <div className={styles.logo_left}>NdV</div>
    <div></div>
    <ul className={styles.ul_top_hypers}>
           {menuLinks.map(({path, name}) => (
      <li key={name} className={styles.hoverMenuLink}>
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
       
       <div className={styles.blur}> 
      {mobileMenu}
      </div>
  </header>
  )
  

         }
export default Navbar;
