import React from 'react';
import styles from './Blog.module.scss';
import Container from '../../Container/Container';
import Post from './Post/Post';

const Blog = () => (
  <div className={styles.background}>
    <Container>
      <h2 style={{ marginBottom: 0 }}>
        <b>Get inspired :)</b>
      </h2>
      <h3>My blog and news</h3>
      <Post title="My camera gear and process" date="02. Mar 18" />
      <Post title="Color correction in instagram times" date="18. Apr 18" />
    </Container>
  </div>
);

export default Blog;
