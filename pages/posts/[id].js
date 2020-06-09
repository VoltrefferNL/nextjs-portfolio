import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Head from "next/head";
import styles from "../../styles/blog.module.css"
import Link from "next/link";
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

  
  export default function Post({ postData}) {
     return (
      <Layout>
          <Head>
              <title>Niels de Visser | {postData.title}</title>
          </Head>
          <article>
          <h1 className={styles.headingXl}>{postData.title}</h1>
        <div className={styles.lightText}>
        <Date dateString={postData.date} />
        <div>{postData.tags.map((tag) => (
          <Link href={{pathname: '/blog', query: { "tag" : postData.tag}}} as ={"/blog"} key={postData.tag}><a><button>{postData.tag}</button></a></Link>
        ))}</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
  }

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }