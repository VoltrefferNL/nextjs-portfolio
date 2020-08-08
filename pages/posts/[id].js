import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import BlogDate from '../../components/Blog/blogdate'
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
          <article className={styles.blog_container}>
          <h1 className={styles.headingXl}>{postData.title}</h1>
        <div className={styles.lightText}>
          <div>
            <h3>
              {postData.tags.map((tag) => (
                <Link href={{pathname: '/blog', query: { "tag" : tag}}} as ={"/blog"} key={tag}>
                  <a><span className={tag}>{tag}</span></a>
                </Link>))}
                <BlogDate dateString={postData.date} />
            </h3>
          </div>
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