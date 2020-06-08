import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => (
  <div className={styles.div_top_hypers}>
    <ul className={styles.ul_top_hypers}>
      <li>
        <Link href="/index">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
