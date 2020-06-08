import Link from "next/link";
import styles from "./navbar.module.css";

const Menu = [
  {
    path : "/", name: "Home", 
  },
  {
    path: "/blog", name: "Blog",
  },
  {
    path: "/#", name: "Contact",
  },

  ]

const Navbar = () => (
  <div className={styles.div_top_hypers}>
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
);

export default Navbar;
