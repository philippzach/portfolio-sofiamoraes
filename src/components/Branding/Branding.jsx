import React from 'react';
import tachyons from 'tachyons';
import styles from './Branding.module.scss';
import Placeholder from './placeholdersquare.jpg';

const Branding = () => (
  <div className={styles.padding}>
    <div className="mw9 center ph3-ns">
      <div className="cf ph2-ns">
        <div className="fl w-100 w-50-ns pa2">
          <div className={styles.abouttext}>
            <h2>
              Branding and <br /> Identy
            </h2>
            <p className="measure-narrow">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, a galley of type and
              scrambled.
            </p>
          </div>
        </div>
        <div className="fl w-100 w-50-ns pa2">
        <img alt="Ui Ux Design by sofia moraes" src={Placeholder} className={styles.profile} />
        </div>
      </div>
    </div>
  </div>
);

export default Branding;