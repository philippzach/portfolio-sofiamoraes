import React from 'react';
import tachyons from 'tachyons';
import styles from './ui.module.scss';
import Placeholder from './placeholdersquare.jpg';

const Ui = () => (
  <div className={styles.padding}>
    <div className="mw9 center ph3-ns">
      <div className="cf ph2-ns">
        <div className="fl w-100 w-50-ns pa2 tc">
          <img alt="Ui Ux Design by sofia moraes" src={Placeholder} className={styles.profile} />
        </div>
        <div className="fl w-100 w-50-ns pa2">
          <div className={styles.abouttext}>
            <h2>
              UI|UX Web <br /> Design & <br /> Development
            </h2>
            <p className="measure-narrow">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, a galley of type and
              scrambled.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Ui;