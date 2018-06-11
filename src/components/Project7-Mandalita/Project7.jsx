import React from 'react';
import ProjectTop from '../ProjectsComponents/ProjectTop';
import HeaderImage from '../../../Design Elements/Project5-Mandalita/mandalita1.svg'; //or mandalita1.svg
import Random from '../ProjectsComponents/BrowseProjects';
import styles from '../ProjectsComponents/Project.module.scss';
import Cupcake from '../../../Design Elements/Project5-Mandalita/mbphoto1-sm.jpg';
import Logo from '../../../Design Elements/Project5-Mandalita/l-01.svg';
import Font1 from '../../../Design Elements/Project5-Mandalita/f2-01.svg';
import Font2 from '../../../Design Elements/Project5-Mandalita/f1-01 copy.svg';
import Color1 from '../../../Design Elements/Project5-Mandalita/a-01.svg';
import Color2 from '../../../Design Elements/Project5-Mandalita/a2-01.svg';
import Color3 from '../../../Design Elements/Project5-Mandalita/a3-01.svg';
import Photo1 from '../../../Design Elements/Project5-Mandalita/4-sm.jpg';
import Photo2 from '../../../Design Elements/Project5-Mandalita/m2-01.svg';
import Photo3 from '../../../Design Elements/Project5-Mandalita/iPad-Pro-UI-sm.jpg';
import Last from '../../../Design Elements/Project5-Mandalita/mbphoto2-sm.jpg';
import Next from '../ProjectsComponents/NextProject';

const Project7 = () => (
  <div>
    <ProjectTop heading="Mandalita" subHeading="Made with Love" pic={HeaderImage} altText="" />
    <div className={styles.container}>
      <div>
        <h2 className={styles.heading}>Mandalita</h2>
        <h3>Baked with Love</h3>
        <p className={styles.text}>
          Known for its wide range of baked goods served along with comfort food, the bakery finds a middle ground
          between ethnic ingredients and an elegant and novel cuisine. Located in the historic San Sebastian de la Paz,
          Bolivia. Mandalita Bakery is at home among the small shops, the creative residents, and the unique atmosphere
          that makes up this historic district.
        </p>
      </div>
    </div>
    <div>
      <img src={Cupcake} alt="" />
    </div>
    <div className={styles.container}>
      <div>
        <h2 className={styles.heading}>Creating the identity</h2>
        <p className={styles.text}>
          The new identity was inspired by the Amazonian roots of the founders and the cozy atmosphere of the restaurant
          without becoming too sweet. Indigenous patterns and textures provide subtle tactility.
        </p>
      </div>
      <div className="tc">
        <img src={Logo} alt="" />
      </div>
      <div className={styles.horizontalline} />
      <div>
        <h2 className={styles.heading}>Fonts used</h2>
        <h3>Finding the perfect spot between ethnic and innovative</h3>
      </div>
      <div className={styles.floatright}>
        <img src={Font1} alt="" />
      </div>
      <div className={styles.floatright}>
        <img src={Font2} alt="" />
      </div>
      <div className={styles.horizontalline} />
      <div className={styles.floatright}>
        <h2 className={styles.heading}>Color Palette</h2>
        <h3>Nice, simple and delicious</h3>
      </div>
      <div>
        <img src={Color1} alt="" />
      </div>
      <div>
        <img src={Color2} alt="" />
      </div>
      <div>
        <img src={Color3} alt="" />
      </div>
      <section className={styles.content}>
        <div className={styles.left}>
          <img src={Photo1} alt="" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.heading}>Branding</h2>
          <h3>The ethnic elements are taken as a reference to develop the entire identity system of the brand.</h3>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.left}>
          <h3>
            Creating a proper language for the bakery that is implemented both in its communication and in the goods
            packaging system
          </h3>
        </div>
        <div className={styles.right}>
          <img src={Photo2} alt="" />
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.left}>
          <img src={Photo3} alt="" />
        </div>
        <div className={styles.right}>
          <h3>With the creation of a simple app ordering your favorite dessert in Monchi's time was never so easy!</h3>
        </div>
      </section>
    </div>
    <img src={Last} alt="" />
    <Next link='/elacaieurope' />
    <Random />
  </div>
);

export default Project7;
