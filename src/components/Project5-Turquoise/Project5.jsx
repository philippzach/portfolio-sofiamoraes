import React from 'react';
import ProjectTop from '../ProjectsComponents/ProjectTop';
import HeaderImage from '../../../Design Elements/Project7-TurquoiseMedia/Banner 1 tqm.png';
import Random from '../ProjectsComponents/BrowseProjects';
import styles from '../ProjectsComponents/Project.module.scss';
import syle from '../Project5-Turquoise/Project5.module.scss';
import Logo from '../../../Design Elements/Project7-TurquoiseMedia/bl-01.svg';
import Logo1 from '../../../Design Elements/Project7-TurquoiseMedia/l-01.svg';
import Website from '../../../Design Elements/Project7-TurquoiseMedia/tqmwebsitebanner.png';
import Colors from '../../../Design Elements/Project7-TurquoiseMedia/cp.svg';
import Card from '../../../Design Elements/Project7-TurquoiseMedia/bc-sm.jpg';
import Font from '../../../Design Elements/Project7-TurquoiseMedia/f-01.svg';
import Mobiles from '../../../Design Elements/Project7-TurquoiseMedia/Mobile Mockup-sm.jpg';
import Next from '../ProjectsComponents/NextProject';


const Project5 = () => (
  <div>
    <ProjectTop heading="Turquoise Media" subHeading="Design | Captivate | Convert" pic={HeaderImage} altText="" />
    <div className={styles.container}>
      <div>
        <h2>The Company</h2>
        <h3>
          Turquoise Media is an independent international creative agency that leads commerces into a digital world
        </h3>
      </div>
      <div className={styles.floatright}>
        <h2>The Solution</h2>
        <h3>
          The founders approached me to elaborate some changes to their already established brand, of which consisted in
          refining the logo and make some changes to its web and mobile design, despite of being a super simple project,
          I enjoyed giving it that colorful & cheerful final look
        </h3>
      </div>
      <div className={styles.horizontalline} />
      <div>
        <h2>Rebranding</h2>
        <h3>The Logo</h3>
        <p>
          After many iterations, I found the right graphic representation of freedom, flexibility, creativity and that
          funky style that expresses what the company is about.
        </p>
        <div className="tc">
          <img src={Logo} />
        </div>
        <div className="tc">
          <img src={Logo1} />
        </div>
      </div>
    </div>
    <section className="dt mw6 center pv4 pv5-m pv6-ns">
      <div className="dtc v-mid">
        <h2>An updated website</h2>
        <p>
          With their new site, the aim was to communicate in the simplest, fastest, and most elegant way their strengths
          as an creative agency.
        </p>
      </div>
      <div className="dtc v-mid pl3">
        <img src={Website} alt="Turquoise Media Webstite Mockup Sofia Moraes copyright" className="mw5" />
      </div>
    </section>
    <div className={styles.container}>
      <div className={styles.horizontalline} />
      <section className="dt mw6 center pv4 pv5-m pv6-ns">
        <div className="dtc v-mid">
          <img src={Colors} alt="Turquoise Media Color Scheme Sofia Moraes copyright" className="mw5" />
        </div>
        <div className="dtc v-mid pl3">
          <h2>Color Palette</h2>
          <h3>Highlighting the best creative solutions</h3>
        </div>
      </section>
    </div>
    <div className="tc">
      <img src={Card} />
    </div>
    <section className="dt mw6 center pv4 pv5-m pv6-ns">
      <div className="dtc v-mid">
        <h2>Font: Quicksand</h2>
        <h3>Family: Sans Serif</h3>
      </div>
      <div className="dtc v-mid pl3">
        <img src={Font} alt="Turquoise Media Fonts Scheme Sofia Moraes copyright" className="mw5" />
      </div>
    </section>
    <div className="tc">
      <img src={Mobiles} />
    </div>
    <Next link='/quantumpeakcoaching' />
    <Random />
  </div>
);

export default Project5;
