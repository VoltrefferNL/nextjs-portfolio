import Layout from "../components/Layout";
import styles from "../styles/index.module.css";
import IntroText from "./content/IntroText";

const Index = () => (
  <Layout>
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={require("../images/0.jpg")} className={styles.profilePic} />
      </div>
      <div className={styles.introtext}>
        <IntroText />
        
      </div>
    </div>
    
  </Layout>
);

export default Index;
