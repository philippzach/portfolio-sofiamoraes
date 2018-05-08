import React from 'react';
import styles from './Projects.module.scss';
import Projectitem from './Projectitem.jsx/Projectitem';
import Link from 'gatsby-link';
import Fade from 'react-reveal/Fade';
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
        <ul className={[styles.layout, styles.layoutleft].join(' ')}>
          <li className={styles.listitem}>
            <Link to="/home">
              <Fade bottom delay={3000}>
                <Projectitem name="Planet" atr="Branding, Graphics, Marketing" img={Planet} />
              </Fade>
            </Link>
          </li>

          <li className={styles.listitem}>
            
            <Link to="/home">
              <Fade bottom delay={4000}>
                
                <Projectitem name="Reuters" atr="UI/UX, Graphics" img={Reuters} />
              </Fade>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link to="/home">
              <Fade bottom delay={1000}>
                <Projectitem name="Dropbox" atr="Photography, Graphics" img={Dropbox} />
              </Fade>
            </Link>
          </li>
        </ul>

        <ul className={styles.layout}>
          <li className={styles.listitem}>
            <Link to="/home">
              <Fade bottom>
                <Projectitem name="Acai" atr="Photography, Graphics" img={Acai} />
              </Fade>
            </Link>
          </li>

          <li className={styles.listitem}>
            <Link to="/home">
              <Fade bottom>
                <Projectitem name="Tennis" atr="Web Design" img={Tennis} />
              </Fade>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link to="/home">
              <Fade bottom>
                <Projectitem name="El Acai" atr="Photography, Graphics" img={Elacai} />
              </Fade>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Projects;
