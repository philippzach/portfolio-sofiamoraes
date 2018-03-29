import React from 'react';
import cat from './cat.svg';

const Cat = () => (
  <img
    style={{
      float: 'right',
      marginBottom: '0px',
      marginRight: '6%',
      marginTop: '-10px',
      height: '75px',
    }}
    src={cat}
    alt="cat animation"
  />
);

export default Cat;
