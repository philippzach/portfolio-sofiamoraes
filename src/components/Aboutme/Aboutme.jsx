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
            <p>is simply dummy text of the printing and typesetting industry.</p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled.
            </p>
            <p>
              it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            { /* }</Typist>{*/}
          </div>
        </div>
      </div>
    </div>
  </div>
  
);

export default Aboutme;
