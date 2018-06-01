import React from 'react';
import styles from './Projects.module.scss';
import Projectitem from './Projectitem.jsx/Projectitem';
import Link from 'gatsby-link';
import Fade from 'react-reveal/Fade';
import Acai from './pics/acai3.png';
import laBalm from '../../../../Design Elements/Home/labalm.jpg';
import Quantum from '../../../../Design Elements/Home/quantum.jpg';
import Media from '../../../../Design Elements/Home/turquoisemedia.jpg';
import CampBay from '../../../../Design Elements/Home/campbaylodge.jpg';
import Nomad from '../../../../Design Elements/Home/nomadyoga.jpg';
import Mandalita from '../../../../Design Elements/Home/mandalita.svg';

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
            <Link to="/labalm">
              <Fade bottom delay={2000}>
                <Projectitem name="LA Balm" atr="Branding, Graphics, Marketing" img={laBalm} />
              </Fade>
            </Link>
          </li>

          <li className={styles.listitem}>
            <Link to="/turqouisemedia">
              <Fade bottom delay={2000}>
                <Projectitem name="Turquoise Media" atr="UI/UX, Graphics" img={Media} />
              </Fade>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link to="/nomadyoga">
              <Fade bottom delay={1000}>
                <Projectitem name="Nomad Yoga" atr="UI/UX, Graphics, Mobile Design" img={Nomad} />
              </Fade>
            </Link>
          </li>
        </ul>

        <ul className={styles.layout}>
          <li className={styles.listitem}>
            <Link to="/elacaieurope">
              <Fade bottom>
                <Projectitem name="El Acai Europe" atr="Photography, Graphics, Web Design" img={Acai} />
              </Fade>
            </Link>
          </li>

          <li className={styles.listitem}>
            <Link to="/campbaylodge">
              <Fade bottom>
                <Projectitem name="Camp Bay Lodge" atr="Identity, Graphics" img={CampBay} />
              </Fade>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link to="/quantumpeakcoaching">
              <Fade bottom>
                <Projectitem name="Quantum Peak Coaching" atr="Branding, Logo, Graphics" img={Quantum} />
              </Fade>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link to="/mandalita">
              <Fade bottom>
                <Projectitem name="Mandalita" atr="Branding, Graphics" img={Mandalita} />
              </Fade>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Projects;
