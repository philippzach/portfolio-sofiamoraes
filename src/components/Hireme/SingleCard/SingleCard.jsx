import React from 'react';
import styles from './SingleCard.module.scss';

const SingleCard = props => (
  <article className="grow pointer br3 mv3" style= {{ boxShadow: "0px 20px 50px 9px rgba(0,0,0,0.20)" }}>
    <div className="tc pa3 pa4-ns br3 br--top" style= {{ backgroundColor: "#ffdf59"}}>
      <img
        src={props.image}
        alt="Sofia Moraes Graphic UI UX Designer"
        className={styles.images}
        title="Sofia Moraes Web Graphic Designer"
      />
    </div>
    <div className="tc">
      <h1 className="f3 mb2">Mimi W.</h1>
      <h2 className="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
    </div>
  </article>
);

export default SingleCard;
