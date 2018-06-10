import React from 'react';
import ProjectTop from '../ProjectsComponents/ProjectTop';
import HeaderImage from '../../../Design Elements/Project4-Quantum Peak Coaching/qpq-sm.jpg';
import Random from '../ProjectsComponents/BrowseProjects';
import styles from '../ProjectsComponents/Project.module.scss';
import Phone from '../../../Design Elements/Project4-Quantum Peak Coaching/iphone-sm.jpg';
import Logo from '../../../Design Elements/Project4-Quantum Peak Coaching/l-01.svg';
import Colors from '../../../Design Elements/Project4-Quantum Peak Coaching/cp-01.svg';
import Font1 from '../../../Design Elements/Project4-Quantum Peak Coaching/ft1g-01.svg';
import Font2 from '../../../Design Elements/Project4-Quantum Peak Coaching/ft2g-01.svg';
import Last from '../../../Design Elements/Project4-Quantum Peak Coaching/brandingmockup-sm.jpg';
import Next from '../ProjectsComponents/NextProject';

const Project6 = () => (
  <div>
    <ProjectTop heading="Quantum Peak Coaching" subHeading="Reaching your highest peaks" pic={HeaderImage} altText="" />
    <div className={styles.container}>
      <div className={styles.floatright}>
        <h3>Quantum Peak Coaching</h3>
        <h2>There is no such thing as reality, only our perception of it</h2>
      </div>
      <section className={styles.content}>
        <div className={styles.left}>
          <h2>
            <b>The Client</b>
          </h2>
          <p>
            Quantum Peak Coaching It is a Canadian company committed to support of people who consider a profound change
            in their lives, based on values and strength of personal influence. specializes, among others, in training,
            consulting and NLP training programs.
          </p>
        </div>
        <div className={styles.right}>
          <h2>
            <b>The Solution</b>
          </h2>
          <p>
            I was asked to create a logo and the brand identity that would highlight the brand's uniqueness on the
            market. The Keywords that sum up branding design were: Powerful / Simplistic / ModernSleek.
          </p>
        </div>
      </section>
    </div>
    <img src={Phone} alt="" />
    <div className={styles.container}>
      <div className={styles.floatright}>
        <h2>Building the Logo</h2>
        <p>
          The graphic representation of the peak was a great metaphorical link to the peak of success and happiness they
          portray through the business, I used a minimalist and angular approach to the design which gave it a simple
          and modern touch
        </p>
      </div>
      <div className="tc">
        <img src={Logo} alt="" />
      </div>
      <div>
        <h2>
          <b>Color Palette</b>
        </h2>
        <h3>Transmitting security, reliability and tranquility</h3>
      </div>
      <div className="tc">
        <img src={Colors} alt="" />
      </div>
      <div className={styles.floatright}>
        <h2>Fonts Used</h2>
        <p>A combination of sans serif which expresses decision making, clarity and balance</p>
      </div>
      <div>
        <img src={Font1} alt="" />
      </div>
      <div className="tc">
        <h3>A great combination to reflect the core values of the company.</h3>
      </div>
      <div className={styles.floatright}>
        <img src={Font2} alt="" />
      </div>
      <div className={styles.horizontalline} />
      <div className="tc">
        <h3>
          The brand visual is the final word on Quantum Peak Coaching identity: logotype, typography, color palette,
          photography, and more. It comes with detailed instructions on how to use these elements in a variety of
          contexts.
        </h3>
      </div>
    </div>
    <img src={Last} alt="" />
    <Next link='/mandalita' />
    <Random />
  </div>
);

export default Project6;
