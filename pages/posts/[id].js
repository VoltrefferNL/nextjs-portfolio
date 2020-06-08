import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Head from "next/head";
import styles from "../../styles/blog.module.css"

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

  export default function Post({ postData }) {
      console.log(postData)
    return (
      <Layout>
          <Head>
              <title>Niels de Visser | {postData.title}</title>
          </Head>
          <article>
          <h1 className={styles.headingXl}>{postData.title}</h1>
        <div className={styles.lightText}>
        <Date dateString={postData.date} />{postData.tags}
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