import React from 'react';
import Link from 'gatsby-link';
import styles from './Blog.module.scss';
import Container from '../../Container/Container';
import Post from './Post/Post';

const Blog = () => (
  <div className={styles.background}>
    <Container>
      <div className={styles.fullflex}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h3>My blog and news</h3>
            <h2 style={{ marginBottom: 0 }}>
              <b>Get inspired :)</b>
            </h2>
          </div>
        </div>
        <div className={styles.posts}>
          <Link to="/blogex1" className={styles.blogpost}>
            <Post title="My camera gear and process" date="02. Mar 18" link="/blogex1" />
          </Link>
          <Link to="/blogex2" className={styles.blogpost}>
            <Post title="Color correction in instagram times" date="18. Apr 18" link="/blogex2" />
          </Link>
        </div>
      </div>
    </Container>
  </div>
);

export default Blog;
