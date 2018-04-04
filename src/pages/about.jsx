import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import Aboutme from '../components/Aboutme/Aboutme';
import Container from '../components/Container/Container';
import Ui from '../components/Ui/Ui';
import Branding from '../components/Branding/Branding';
import Photography from '../components/Photography/Photography';

const About = () => (
  <div>
    <Helmet title={`About | ${config.siteTitle}`} />
    <Container>
      <Aboutme />
      <Ui />
      <Branding />
      <Photography />
    </Container>
    <Footer />
  </div>
);

export default About;
