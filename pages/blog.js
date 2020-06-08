import React from "react";
import Layout from "../components/Layout";
import ProjectText from "./content/ProjectText";
import styles from "./content/content.module.css"
import { getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { useRouter } from 'next/router'



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
    <section>
      
      {tag ?  <div><center><br /><h4> <u>{tag}</u> Related Posts</h4></center></div> : ""}
        <ul>
          {tagsArr.map(({ id, date, title, tags }) => (
            <li key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a></Link>
              <br />
            <Date dateString={date} />
             <div>{tags.map((tag) => (
          <Link href={{pathname: '/blog', query: { "tag" : tag}}} as ={"/blog"} key={tag}><a><button>{tag}</button></a></Link>
        ))}</div>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  );
};

export default blog
