import React from 'react';
import styles from './Post.module.scss';

const Post = props => (
  <div>
    <h3>{props.title}</h3><a>{props.date}</a>
  </div>
);

export default Post;
