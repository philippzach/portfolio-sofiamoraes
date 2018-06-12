import React from 'react';
import styles from './Random.module.scss';
import Placeholder from './placeholdersquare.png';
import Button from '../../Buttons/Button2/Button2';
import Typist from 'react-typist';

const locations = ['Hawaii', 'Venezuela', 'Bali', 'Austria'];

const Random = () => (
  <div className={styles.master}>
    <div className={styles.maincontainer}>
      <div className={styles.secondarycontainer}>
        <div className={styles.container1}>
          <h2>
            <b>Hi, I'm Sofia </b> - a graphic and experience designer based in
            {' '}
            <span>
            <Typist className={styles.Typist} startDelay={2200} avgTypingDelay={150} cursor={{ show: false }}>
            <span><b>Hawaii</b></span>
            <Typist.Backspace count={6} delay={1500}/>
            <span><b>Bali</b></span>
            <Typist.Backspace count={4} delay={1500}/>
            <span><b>Austria</b></span>
            <Typist.Backspace count={7} delay={1500}/>
            <span><b>Venezuela at the moment</b></span>
            </Typist>
            </span>
            , I enjoy creating beautiful solutions.
          </h2>
          <div className={styles.buttondiv}>
            <Button name="More projects" link="#projects" />
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.background}>
            <div className={styles.fill} />
          </div>
          <div className={styles.project}>
            <img className={styles.projectimg} alt="placeholder" src={Placeholder} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Random;
