import React from 'react';
import Link from 'next/link'
import Date from '../components/date'
import styles from "./blogline.module.css"

const Blogline = (props) => {
const {tagsArr} = props
    return (
        <div className={styles.Headline_container}>
            {tagsArr.map(({ id, date, title, tags }) => (
            <li key={id}>
                <article className={styles.Article_listing}>
                <aside className={styles.topDate}><Date dateString={date} /></aside>
              <span>{tags.map((tag) => (
          <Link href={{pathname: '/blog', query: { "tag" : tag}}} as ={"/blog"} key={tag}><a><span className={tag}>{tag}</span></a></Link>
        ))} <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a></Link></span>
                 </article>
                         
            
             
            </li>
          ))}
        </div>
    );
};

export default Blogline