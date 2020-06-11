import React from "react";
import Layout from "../components/Layout";
import { getSortedPostsData} from '../lib/posts'
import styles from "../styles/blog.module.css";
import { useRouter } from 'next/router'
import Blogline from "../components/blogline";


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
      
      {tag ?  <div><center><h4> <u>{tag}</u> Related Posts</h4></center></div> : ""}
        <ul>
          {/* {tagsArr.map(({ id, date, title, tags }) => (
            <li key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a></Link>
              <br />
            <Date dateString={date} />
             <div>{tags.map((tag) => (
          <Link href={{pathname: '/blog', query: { "tag" : tag}}} as ={"/blog"} key={tag}><a><button>{tag}</button></a></Link>
        ))}</div>
            </li>
          ))} */}
          <Blogline tagsArr={tagsArr}/>
        </ul>
      </section>

    </Layout>
  );
};

export default blog
