import React from 'react';
import ProjectTop from '../ProjectsComponents/ProjectTop';
import HeaderImage from '../../../Design Elements/Project3-LApalm/banner2.jpg';
import Random from '../ProjectsComponents/BrowseProjects';
import styles from '../ProjectsComponents/Project.module.scss';
import syle from '../Project2-LaBalm/Project2.module.scss';
import Logo from '../../../Design Elements/Project3-LApalm/Lb-01.svg';
import Font1 from '../../../Design Elements/Project3-LApalm/tps-01.svg';
import Font2 from '../../../Design Elements/Project3-LApalm/tp2-01.svg';
import Colors from '../../../Design Elements/Project3-LApalm/pc-01.svg';
import Product1 from '../../../Design Elements/Project3-LApalm/bb2-sm.jpg';
import Product2 from '../../../Design Elements/Project3-LApalm/Face Oil-sm.jpg';
import Product3 from '../../../Design Elements/Project3-LApalm/Boxes Mockup-sm.jpg';
import Catalog1 from '../../../Design Elements/Project3-LApalm/book2-sm.jpg';
import Catalog2 from '../../../Design Elements/Project3-LApalm/bb blue-sm.jpg';
import Catalog3 from '../../../Design Elements/Project3-LApalm/bookcoco-sm.jpg';
import Catalog4 from '../../../Design Elements/Project3-LApalm/Horizontal_Book_Mockup_1-sm.jpg';
import Sticker from '../../../Design Elements/Project3-LApalm/stickers-sm.jpg';
import Instagram1 from '../../../Design Elements/Project3-LApalm/iphone1.png';
import Instagram2 from '../../../Design Elements/Project3-LApalm/iphone2.png';
import Instagram3 from '../../../Design Elements/Project3-LApalm/iphone3.png';
import Next from '../ProjectsComponents/NextProject';

const Project2 = () => (
  <div>
    <ProjectTop heading="LA Balm" subHeading="Cococanna - Natural Skin Care" pic={HeaderImage} altText="" />
    <div className={styles.container}>
      <div className={styles.floatleft}>
        <h2>Sharing the love</h2>
        <p>
          La Balm is a line of high quality handcrafted skincare products. Based in California, offers small-batch,
          organic and wildcrafted body care that uses 100% natural and plant-based ingredients.
        </p>
      </div>
      <div className={styles.floatright}>
        <h3>Strategy</h3>
        <h2>An approach of simplicity to daily life</h2>
        <p>
          The strategy was to design the visual identity and packaging that would adopt a distinctive language in front
          of the traditional brands of cosmetics, focusing on promoting an more natural and simple lifestyle.
          <br />
          Inspired by: Love | Happiness | Sharing the good stuff
        </p>
      </div>
      <section className={styles.content}>
        <div className={styles.left}>
          <img src={Logo} alt="LABalm Logo Sofia Moraes copyright" />
        </div>
        <div className={styles.right}>
          <h3>Logo</h3>
          <h2>Spraying those vibes!</h2>
          <p>Simple and minimal, allowing the brands' spirit and modern vibe shine.</p>
        </div>
      </section>
      <div>
        <h3>Typography</h3>
        <h2>The edge between fun & minimalistic</h2>
        <section className={styles.content}>
          <div className={styles.left}>
            <img src={Font1} />
          </div>
          <div className={styles.right}>
            <img src={Font2} />
          </div>
        </section>
      </div>
      <div className={styles.floatright}>
        <h3>Color Palette</h3>
        <h2>Pastel Colours babe</h2>
        <p>
          The client wanted a palette that was bright and fun. I picked a main colour for each pack then mixed up the
          remaining colours as accents across the range.
        </p>
      </div>
      <div>
        <img src={Colors} />
      </div>
      <div className="tc">
        <h2>Product Line</h2>
        <p>LA Balm, a brand with a steadfast belief in the power of self-love and communion with nature.</p>
      </div>
      <div>
        <img src={Product1} />
        <img src={Product2} />
        <img src={Product3} />
      </div>
      <div className="tc">
        <h2>Catalog Design</h2>
        <p>Good vibes go a long way*</p>
      </div>
      <div>
        <img src={Catalog1} />
        <img src={Catalog2} />
        <img src={Catalog3} />
        <img src={Catalog4} />
      </div>
      <div className={styles.horizontalline} />
      <img src={Sticker} />
      <div className={styles.horizontalline} />
      <div className="tc">
        <h2>Instagram Graphics</h2>
        <p>'How to' Instagram slide graphics.</p>
      </div>
      <div className={syle.yellowbackground}>
        <img src={Instagram1} />
        <img src={Instagram2} />
        <img src={Instagram3} />
      </div>
    </div>
    <Next link='/nomadyoga' />
    <Random />
  </div>
);

export default Project2;
