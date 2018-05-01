import React from 'react';
import styles from './Projects.module.scss';
import Projectitem from './Projectitem.jsx/Projectitem';
import Link from 'gatsby-link';
import Acai from './pics/acai3.png';
import Planet from './pics/planet.jpg';
import Elacai from './pics/acai4.jpg';
import Reuters from './pics/reuters.jpg';
import Tennis from './pics/tennis.jpg';
import Dropbox from './pics/dropbox.jpg';


const Projects = () => (
    <div>
<div className={styles.container}>
        <div className="center measure-wide">
          <h2 className={styles.line} style={{ marginBottom: 0 }}>
            <b>Check out my work!</b>
          </h2>
          <h3>Selected Projects</h3>
        </div>
      </div>
<div className={styles.overflow}>
    <div className={styles.boxes}>
    <ul className={[styles.layout, styles.layoutleft].join(' ')} >
      <li className={styles.listitem}> <Link to="/home"> <Projectitem name="Planet" atr="Branding, Graphics, Marketing" img={Planet}/> </Link></li>
      <li className={styles.listitem}> <Link to="/home"> <Projectitem name="Dropbox" atr="Photography, Graphics" img={Dropbox}/> </Link> </li>
      <li className={styles.listitem}> <Link to="/home"> <Projectitem name="Acai" atr="Photography, Graphics" img={Acai}/> </Link> </li>
    </ul>
    <ul className={styles.layout}>
      <li className={styles.listitem}> <Link to="/home"> <Projectitem name="Reuters" atr="UI/UX, Graphics" img={Reuters}/> </Link> </li>
      <li className={styles.listitem}> <Link to="/home"> <Projectitem name="Tennis" atr="Web Design" img={Tennis}/> </Link> </li>
      <li className={styles.listitem}> <Link to="/home"> <Projectitem name="El Acai" atr="Photography, Graphics" img={Elacai} /> </Link> </li>
    </ul>
  </div>
  </div>
</div>
);

export default Projects;
