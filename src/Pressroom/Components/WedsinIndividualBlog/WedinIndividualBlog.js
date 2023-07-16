import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './WedsinIndividualBlog.module.css';
import blogData from '../BlogData';


const WedsinIndividualBlog = () => {
    const params = useParams();
    const reqBlogId = params.individualBlogId;
    const data = blogData[reqBlogId-1]
    return (
        <div className={styles.blogContainer}>
            <h1 className={styles.heading}>{data.title}</h1>
            <div className={styles.metadata}>
                <p className={styles.date}> {data.author} &#x2022; {data.date}</p>
            </div>
            <p className={styles.body}>{data.paragraph}</p>
        </div>
    );
};

export default WedsinIndividualBlog;