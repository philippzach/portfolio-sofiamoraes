import React from 'react';
import Link from 'gatsby-link';
import Container from '../../Container/Container';
import styles from './Explanation.module.scss';

const Explanation = () => (
  <div>
    <Container>
    <div className={styles.container}>
      <div className="measure-wide center">
        <h2 className={styles.fix} style={{ textAlign: 'center' }}>
          We are a full service digital agency, busy designing and building beautiful digital products, brands and
          experiences
        </h2>
        <button className="fr">
          <Link to="/hireme">hire me</Link>
        </button>
      </div>
      </div>
    </Container>
  </div>
);

export default Explanation;
