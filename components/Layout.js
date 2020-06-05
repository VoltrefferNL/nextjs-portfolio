import Head from "next/head";
import Navbar from "./Navbar";
import Submenu from "./Submenu";
import styles from "./layout.module.css";
import Socials from "./Socials.js";

const Layout = (props) => (
  <div className={styles.container}>
    <Head>
      <title>Niels de Visser | Portfolio</title>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous"></link>
    </Head>
    {/* <div className={styles.submenu}>
      <Submenu />
    </div> */}
    {/* <div className={styles.navbar}>
      <Navbar />
    </div> */}
    <div className={styles.mainContent}> {props.children}</div>
    
      <Socials />
    
  </div>
);

export default Layout;
