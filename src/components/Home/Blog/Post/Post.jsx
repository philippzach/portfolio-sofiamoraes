import React from 'react';
import styles from './Post.module.scss';

const Post = props => (
  <div className={styles.blogpost}>
    <div className={styles.date}>{props.date}</div>
    <h3 className={styles.title}>{props.title}</h3>
    <div>
      <div>
        <span>read more</span>
      </div>
    </div>
  </div>
);

export default Post;
