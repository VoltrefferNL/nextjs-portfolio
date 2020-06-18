import Head from "next/head";
import Navbar from "./Menu/Navbar";
import styles from "./layout.module.css";

const Layout = (props) => (
  <div className={styles.container}>
    <Head>
      <title>Niels de Visser | Portfolio</title>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous"></link>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap" rel="stylesheet"></link>
      <script src="https://unpkg.com/scrollreveal/dist/scrollreveal.min.js"></script>
    </Head>
    <div className={styles.topend_wrapper}>
    <div className={styles.desktop_spacer}></div>
       <div className={styles.navbar_wrapper}>
      <Navbar />
      {/* <NavBarState /> */}
    </div>
        <div className={styles.swoosh_Bar}>
<svg preserveAspectRatio="none" width="1440" height="74" viewBox="0 0 1440 74" className={styles.swoosh_Unit}>
  <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
</svg>

    </div>
    </div>
    <div className={styles.mainContent}> {props.children}</div>
  </div>
);

export default Layout;
