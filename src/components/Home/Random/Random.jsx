import React from 'react';
import styles from './Random.module.scss';
import Placeholder from './placeholdersquare.png';
import Button from '../../Buttons/Button2/Button2';


const Random = () => (
  <div className={styles.master}>
    <div className={styles.maincontainer}>
      <div className={styles.secondarycontainer}>
        <div className={styles.container1}>
          <h2>
            <b>Hi, I'm Sofia </b> - a graphic and web designer based in Hawaii, I enjoy creating beautiful solutions.
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
