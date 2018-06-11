import React from 'react';
import ProjectTop from '../ProjectsComponents/ProjectTop';
import HeaderImage from '../../../Design Elements/Project6-Nomad/Cards1-sm.png';
import Random from '../ProjectsComponents/BrowseProjects';
import styles from '../ProjectsComponents/Project.module.scss';
import syle from '../Project3-Nomad/Project3.module.scss';
import Phone1 from '../../../Design Elements/Project6-Nomad/app1.png';
import Phone2 from '../../../Design Elements/Project6-Nomad/app2.png';
import Phone3 from '../../../Design Elements/Project6-Nomad/app3.png';
import Logo from '../../../Design Elements/Project6-Nomad/lOGO-01.svg';
import Ring1 from '../../../Design Elements/Project6-Nomad/c1-01-01.svg';
import Ring2 from '../../../Design Elements/Project6-Nomad/c2-06-01.svg';
import Ring3 from '../../../Design Elements/Project6-Nomad/c3-02-01-01.svg';
import Diagram from '../../../Design Elements/Project6-Nomad/Diagram-01.svg';
import Mockup from '../../../Design Elements/Project6-Nomad/Thumnails-01.svg';
import Apps from '../../../Design Elements/Project6-Nomad/mockup final-sm.png';
import Next from '../ProjectsComponents/NextProject';

const Project3 = () => (
  <div>
    <ProjectTop heading="Nomad Yoga" subHeading="Ready to feel good?" pic={HeaderImage} altText="" />
    <div className={styles.container}>
      <div className={styles.floatright}>
        <h2 className={styles.heading}>What is Nomad Yoga</h2>
        <p className={styles.text}>
          Is a App which presents a series of soulful yoga curated for daily use, designed to help people to build a
          morning routine, connect with other yoguis, center, or simple disconnect from a busy life.
        </p>
      </div>
      <div className={styles.horizontalline} />
      <div className="tc">
        <p className={styles.text}>
          The founders of Nomad Yoga expressed their desire to create an application in which people had the opportunity
          to create a habit around their practice.
        </p>
      </div>
    </div>
    <div className={syle.greybackground}>
      <img src={Phone1} />
      <img src={Phone2} />
      <img src={Phone3} />
    </div>
    <div className={styles.container}>
      <section className={styles.content}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Logo</h2>
          <h3>Spraying those vibes!</h3>
          <p className={styles.text}>Simple and minimal, allowing the brands' spirit and modern vibe shine.</p>
        </div>
        <div className={styles.right}>
          <img src={Logo} alt="Nomad Yoga Logo Sofia Moraes copyright" />
        </div>
      </section>
      <section className="dt mw6 center pv4 pv5-m pv6-ns">
        <div className="dtc v-mid">
          <h3>Comparisson Logo with Tachyons Flag</h3>
          <h2 className={styles.heading}>Spraying those vibes!</h2>
          <p className={styles.text}>Simple and minimal, allowing the brands' spirit and modern vibe shine.</p>
        </div>
        <div className="dtc v-mid pl3">
          <img src={Logo} alt="Nomad Yoga Logo Sofia Moraes copyright" className="mw5" />
        </div>
      </section>
      <div className={styles.floatright}>
        <h2 className={styles.heading}>Goals</h2>
        <p className={styles.text}>
          Create a minimal, easy and focused practice that offers the three elements of habit: simplicity, community and
          discovery. These characteristics are deeply rooted in the human being, which bring as a consequence a total
          commitment with the application.
        </p>
      </div>
      <div>
        <img src={Ring1} />
        <img src={Ring2} />
        <img src={Ring3} />
      </div>
      <div className={styles.horizontalline} />
      <div className="tc">
        <h3>
          The purpose of creating user flows for this application was mainly to demonstrate in a simple way the founders
          and developers the operation of the app.
        </h3>
        <img src={Diagram} />
        <div className={styles.floatright}>
          <h2 className={styles.heading}>Simple UI</h2>
          <h3>Simplicity is the closest way to the heart</h3>
          <p className={styles.text}>
            With the aim of a minimum decision making and a beautiful and simple user interface, the design of the touch
            screen allows the user to access the practice in an easy and practical way, eliminating any element of
            distraction.
          </p>
        </div>
        </div>
        </div>
        <img src={Mockup} style={{ width: "100%"}} />
        <div className={styles.container}>
        <h3 className={styles.h3text}>
          The creation of iconography and miniatures was inspired by the soft tones of the main design palette, which
          resulted in a very pleasing appearance to the eye.
        </h3>
        </div>
        <img src={Apps} style={{ width: "100%"}} />
    <Next link='/campbaylodge' />
    <Random />
  </div>
);

export default Project3;
