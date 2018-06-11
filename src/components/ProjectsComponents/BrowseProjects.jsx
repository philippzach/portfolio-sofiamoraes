import React from 'react';
import Link from 'gatsby-link';
import styles from './Project.module.scss';
import stylesp from '../../components/Home/Projects/Projectitem.jsx/Projectitem.module.scss';
import Acai from '../Home/Projects/pics/acai3.png';
import Camp from '../../../Design Elements/Home/campbaylodge.jpg';
import Quant from '../../../Design Elements/Home/quantum.jpg';
import laBalm from '../../../Design Elements/Home/labalm.jpg';
import Media from '../../../Design Elements/Home/turquoisemedia.jpg';
import Nomad from '../../../Design Elements/Home/nomadyoga.jpg';
import Mandalita from '../../../Design Elements/Home/mandalita.svg';

const ElAcai = {
  id: 1,
  name: 'El Acai Europe',
  keyword: 'Photography, Graphics, Web Design',
  img: Acai,
  link: '/elacaieurope',
};
const CampBay = {
  id: 2,
  name: 'Camp Bay Lodge',
  keyword: 'Logo, Identity, Graphics',
  img: Camp,
  link: '/campbaylodge',
};
const Quantum = {
  id: 3,
  name: 'Quantum Peak Coaching',
  keyword: 'Branding, Logo, Graphics',
  img: Quant,
  link: '/quantumpeakcoaching',
};
const laBalmProject = {
  id: 4,
  name: 'LA Balm',
  keyword: 'Branding, Graphics, Marketing',
  img: laBalm,
  link: '/labalm',
};
const Turquoise = {
  id: 5,
  name: 'Turquoise Media',
  keyword: 'UI/UX, Graphics',
  img: Media,
  link: '/turquoisemedia',
};
const Yoga = {
  id: 6,
  name: 'Nomad Yoga',
  keyword: 'UI/UX, Graphics, Mobile Design',
  img: Nomad,
  link: '/nomadyoga',
};
const Manda = {
  id: 7,
  name: 'Mandalita',
  keyword: 'Branding, Graphics',
  img: Mandalita,
  link: '/mandalita',
};

const ProjectArray = [Manda, Yoga, Turquoise, laBalmProject, Quantum, CampBay, ElAcai];

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const a = shuffle(ProjectArray);

class Random extends React.Component {
  constructor() {
    super();
    this.state = {
      link1: a[0].link,
      name1: a[0].name,
      img1: a[0].img,
      keyword1: a[0].keyword,
      link2: a[1].link,
      name2: a[1].name,
      img2: a[1].img,
      keyword2: a[1].keyword,
      randomLink: a[2].link,
    };
    this.handleClick = this.handleClick.bind(this);
  }

   handleClick() {
    this.setState({
      link1: a[5].link,
      name1: a[5].name,
      img1: a[5].img,
      keyword1: a[5].keyword,
      link2: a[6].link,
      name2: a[6].name,
      img2: a[6].img,
      keyword2: a[6].keyword,
      randomLink: a[3].link,
    });
  } 

  render() {
    return (
      <div className={styles.container}>
        <section className={styles.content} style={{ textAlign: 'center', marginTop: '4em', marginBottom: '5em' }}>
          <div className={styles.left}>
            <Link to={this.state.link1} onClick={this.handleClick}>
              <img className={styles.random} src={this.state.img1} />
              <div>
                <h3 className={stylesp.heading}>{this.state.name1}</h3>
                <p className={stylesp.atr}>{this.state.keyword1}</p>
              </div>
            </Link>
          </div>
          <div className={styles.right}>
            <Link to={this.state.link2} onClick={this.handleClick}>
              <img className={styles.random} src={this.state.img2} />
              <div>
                <h3 className={stylesp.heading}>{this.state.name2}</h3>
                <p className={stylesp.atr}>{this.state.keyword2}</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

// console.log(shuffle(ProjectArray));
// console.log(a[0].img);
// console.log(this.state.name1);
// console.log(this.state.name2);

export default Random;
