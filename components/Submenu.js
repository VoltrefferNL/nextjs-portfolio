import styles from "./layout.module.css";
import Link from "next/link";

const Submenu = () => (
  <div>
    <Link href="/">
    <h1 className={styles.headingXl}>Niels de Visser</h1>
    </Link>
  </div>
);

export default Submenu;
