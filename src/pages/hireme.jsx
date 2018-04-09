import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import Hireme from '../components/Hireme/Hireme';

const Contact = () => (
  <div className="container contact-container">
    <Helmet title={`Hire me for a few hours | ${config.siteTitle}`} />
    <Container>
    <Hireme/>
    </Container>
    <Footer />
  </div>
);

export default Contact;
