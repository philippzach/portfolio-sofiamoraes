import React from 'react';
import Container from '../../Container/Container';
import styles from './Explanation.module.scss';
import Button from '../../Buttons/Button1/Button1';

const Explanation = () => (
  <div  id="projects">
    <Container>
      <div className={styles.container}>
        <div className="measure-wide center">
          <h2 className={styles.fix} style={{ textAlign: 'center' }}>
            We are a full service digital agency, busy designing and building beautiful digital products, brands and
            experiences
          </h2>
          <div className="fr">
          <Button name="Hire me" link="/hireme"/>
          </div>
      </div>
      </div>
    </Container>
  </div>
);

export default Explanation;
