import React from "react";
import Layout from "../components/Layout";
import ProjectText from "./content/ProjectText";
import styles from "./content/content.module.css"
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


const blog = ({ allPostsData }) => {
  return (
    <Layout>
    <section>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {console.log(id)}
              <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a></Link>
              <br />
               
             <Date dateString={date} />
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  );
};

export default blog;
