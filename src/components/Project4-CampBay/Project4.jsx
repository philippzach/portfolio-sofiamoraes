import React from 'react';
import ProjectTop from '../ProjectsComponents/ProjectTop';
import HeaderImage from '../../../Design Elements/Project2-CampBay/Banner-sm.jpg';
import Random from '../ProjectsComponents/BrowseProjects';
import styles from '../ProjectsComponents/Project.module.scss';
import syle from './Project4.module.scss';
import Button from '../Buttons/Button1/Button1';
import Logos from '../../../Design Elements/Project2-CampBay/Palm Icon-01.svg';
// import Carved from '../../../Design Elements/Project2-CampBay/';
import Blue from '../../../Design Elements/Project2-CampBay/bt-01.svg';
import Grey from '../../../Design Elements/Project2-CampBay/gd-01.svg';
import Sketch1 from '../../../Design Elements/Project2-CampBay/1-01.svg';
import Sketch2 from '../../../Design Elements/Project2-CampBay/2-01.svg';
import Sketch3 from '../../../Design Elements/Project2-CampBay/3-01.svg';
import Mockup1 from '../../../Design Elements/Project2-CampBay/m1.png';
import Mockup2 from '../../../Design Elements/Project2-CampBay/m2.png';

const Project4 = () => (
  <div>
    <ProjectTop heading="Camp Bay Lodge" subHeading="A mindful experience" pic={HeaderImage} altText="" />
    <div className={styles.container}>
      <section className={styles.content}>
        <div className={styles.left}>
          <h2>What is actually</h2>
          <h3>Camp Bay Lodge?</h3>
        </div>
        <div className={styles.right}>
          <p>
            It is a hotel located in the uncrowded East end of Roatan, totally removed from the regular tourism hustle
            surrounded by exuberant nature.
          </p>
          <Button name="Link to site" link="" />
        </div>
      </section>
    </div>
    <div className={styles.container} style={{ backgroundColor: 'darkgrey' }}>
      <section className={styles.content}>
        <div className={styles.left} style={{ padding: '10% 2%' }}>
          <h2 style={{ color: 'white', marginBottom: '0.5rem' }}>
            <b>Building the Identity</b>
          </h2>
          <h3 style={{ color: 'white', fontWeight: 200 }}>Reflecting Camp Bay Logde</h3>
          <p style={{ color: 'white', fontWeight: 200 }}>
            The client was very clear about message behind the logo: the Lodge is more about a place where you can
            return to the true nature of self, surrounded by a majestic nature and still have the opportunity to connect
            with the moment through yoga, meditation or any sports activity.
          </p>
        </div>
        <div className={styles.right}>
          <img className={styles.acailogo} src={Logos} alt="El Acai Europe Logo Brand Identity" />
        </div>
      </section>
    </div>
    <div className={styles.container}>
      <section className="dt mw6 center pv4 pv5-m pv6-ns">
        <div className="dtc v-mid">
          <img src={Logos} alt="Turquoise Media Fonts Scheme Sofia Moraes copyright" className="mw5" />
        </div>
        <div className="dtc v-mid pl3">
          <h3>
            The final logo was also carved in wood by local artists, giving an original touch to each space of the place
          </h3>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.left}>
          <h2>Color Palette</h2>
          <h3>Inspired by nature</h3>
          <p>
            After getting inspired by the island of Roatan, I decided to complement the favourite colour of the client:
            turquoise with a light blue representing the panoramic view of the sea along with two monochromatic grays to
            give a professional and reliable style.
          </p>
        </div>
        <div className={styles.right}>
          <img src={Blue} alt="" />
          <img src={Grey} alt="" />
        </div>
      </section>
      <div className="tc">
        <h2>Developing the logo & base shape</h2>
        <h3>
          The main idea for the realisation of the base shape was representing the universal law of: “ as it is above so
          below” referring to every thought that we place in our mind will shape our reality.
        </h3>
      </div>
      <div className="tc">
        <img src={Sketch1} alt="" />
        <img src={Sketch2} alt="" />
        <img src={Sketch3} alt="" />
      </div>
      <div className="tc">
        <h3>
          This idea was reflected in a very simple way though two inverse triangles and a circle representing the whole.
          The definition was very pleasant for the client due that Camp Bay Lodge is not just an hotel but a space for
          reflection where you can find the balance in your mind and therefore in Life.
        </h3>
      </div>
    </div>
    <div className={styles.container} style={{ backgroundColor: 'darkgrey' }}>
      <h1>Placeholder</h1>
    </div>
    <div className={styles.container}>
      <div className="tc">
        <h2>What I love the most while designing this</h2>
        <h3>
          This idea was reflected in a very simple way though two inverse triangles and a circle representing the whole.
          The definition was very pleasant for the client due that Camp Bay Lodge is not just an hotel but a space for
          reflection where you can find the balance in your mind and therefore in Life.
        </h3>
      </div>
      <section className={styles.content}>
        <div className={styles.left}>
          <img src={Mockup1} alt="" />
        </div>
        <div className={styles.right}>
          <img src={Mockup2} alt="" />
        </div>
      </section>
    </div>
    <div className={styles.container} style={{ backgroundColor: 'darkgrey' }}>
      <section className={styles.content}>
        <div className={styles.left}>
          <h2>On-side website</h2>
          <h3>Merging all the elements</h3>
          <p>
            My work was not limited to graphic design, but also to the production of audiovisual, as well as being part
            of the web design team.
          </p>
        </div>
        <div className={styles.right}>
          <img src={Mockup2} alt="" />
        </div>
      </section>
    </div>
    <div className={styles.container}>
      <div className="tc">
        <h1 className="measure">
          <b>Camp Bay lodge is part of one of the most remote and original communities in the world</b> full of life,
          exotic food and surrounded by ancient special feeling.
        </h1>
      </div>
    </div>
    <Random />
  </div>
);

export default Project4;
