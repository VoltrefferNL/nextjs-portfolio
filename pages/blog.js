import React from "react";
import Layout from "../components/Layout";
import { getSortedPostsData} from '../lib/posts'
import styles from "../styles/blog.module.css";
import { useRouter } from 'next/router'
import Blogline from "../components/Blog/blogline";


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
    return {
    props: {
      allPostsData      
    }
  }
}



const blog = ({ allPostsData }) => {
  const router = useRouter()
  const {tag} = router.query
    const tagsArr = allPostsData.filter(post => {
      if (tag){
        
    return post.tags.includes(tag)
  }
    else {
      return post
      }
    }
  );
   return (
    <Layout>
    <section className={styles.blog_container}>
      {tag ?  <div><h1><span className="underline"> {tag} </span>Related Posts</h1></div> : ""}
        <ul>
          <Blogline tagsArr={tagsArr}/>
        </ul>
        
      </section>
      
    </Layout>
  );
};

export default blog
