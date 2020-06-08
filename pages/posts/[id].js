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

  
  export default function Post({ postData : {title, date, tags} }) {
     return (
      <Layout>
          <Head>
              <title>Niels de Visser | {title}</title>
          </Head>
          <article>
          <h1 className={styles.headingXl}>{title}</h1>
        <div className={styles.lightText}>
        <Date dateString={date} />
        <div>{tags.map((tag) => (
          <Link href={{pathname: '/blog', query: { "tag" : tag}}} as ={"/blog"} key={tag}><a><button>{tag}</button></a></Link>
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