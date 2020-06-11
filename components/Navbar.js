import Link from "next/link";
import styles from "./navbar.module.css";


const Menu = [
  {
    path: "/blog", name: "Blog",
  },
  {
    path: "/#", name: "100DaysofCode",
  },

  ]

const Navbar5 = () => (
  <header className={styles.header_Wrapper}>
  <div className={styles.div_top_hypers}>
    <div className={styles.logo_left}>NdV</div>
   
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
       </div>
       <div className={styles.menu_right}><Link href={"#"}><button onClick={() => {showDiv()}}><i className="fa fa-bars"></i></button></Link></div>
       <div className={styles.menu_mobile}> 
         {Menu.map(({path, name}) => (
      <li key={name}>
        <Link href={path} as={path}>
          <a>{name}</a>
        </Link>
      </li>))}
      </div>
  </header>
  
  
);

export default Navbar5;
