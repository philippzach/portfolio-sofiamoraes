import React from 'react';
import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.line}>
    <h2 className={styles.spacing}>
      Its easy: you can hire me for a few hours Perfect if you need a small task to be done :) or you can Email me with
      about your project!
      <br />
    </h2>
    </div>
  </div>
);

export default Header;
