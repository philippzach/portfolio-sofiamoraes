import React from 'react';
import Random from './Random/Random';
import Explanation from './Explanation/Explanation';
import Container from '../Container/Container';
import Blog from '../Home/Blog/Blog';

const Home = () => (
  <div>
    <Container>
      <Random />
    </Container>
    <Explanation />
    <Blog />
  </div>
);

export default Home;
