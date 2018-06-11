import React from 'react';
import styles from './aboutme.module.scss';
import tachyons from 'tachyons';
import Profilepic from './aboutsm.jpg';
import Typist from 'react-typist';

const Aboutme = () => (
  <div>
    <div className="mw9 center ph3-ns">
      <div className="cf ph2-ns">
        <div className="fl w-100 w-50-ns pa2">
          <img alt="Sofia Moraes Portrait" src={Profilepic} className={styles.profile} />
        </div>
        <div className="fl w-100 w-50-ns pa2 measure-narrow">
          <div className={styles.abouttext}>
            <h2>About Me</h2>
            { /* }<Typist cursor= {{show: false,  }}>{*/}
            <p>Sofia is a designer specialized in User Experience & Interface, Front-End and Branding Identity.</p>
            <p>
            Originally from Venezuela, she has spent the last 7 years traveling the world using her creative and physical skills, her obsession with order and perfection has made her a graphic designer of high caliber, her passion for image and moments has given her the opportunity to transmit sensations through the lens.
            </p>
            <p>
            She loves to find the balance between beauty and usefulness, create aesthetic (beautiful) solutions that propel towards a more united world and collaborate with awesome and creative people all over the globe.
            </p>
            <p>In her spare time you will find her only in one place: the ocean!</p>
            { /* }</Typist>{*/}
          </div>
        </div>
      </div>
    </div>
  </div>
  
);

export default Aboutme;
