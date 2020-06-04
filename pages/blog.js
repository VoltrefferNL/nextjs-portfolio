import React from "react";
import Layout from "../components/Layout";
import ProjectText from "./content/ProjectText";
import styles from "./content/content.module.css"

const blog = () => {
  return (
    <Layout>
     <div >
        <img src={require("../images/projects/ncnews.png")} className={styles.projectImage}/>
      </div>

    </Layout>
  );
};

export default blog;
