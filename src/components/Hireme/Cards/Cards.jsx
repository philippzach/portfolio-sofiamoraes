import React from 'react';
import styles from './Cards.module.scss';
import SingleCard from '../SingleCard/SingleCard';
import Blitz from './blitz.svg';
import Printer from './printer.svg';
import Illu from './illustration.svg';

const Cards = () => (
<div className={styles.container}>
  <SingleCard image={Blitz} />
  <SingleCard image={Printer} />
  <SingleCard image={Illu} />
</div>
);

export default Cards;
