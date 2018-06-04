import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import Project1 from '../components/Project1-ElAcai/Project1';

const Blog = () => (
  <div>
    <Helmet title={`El Acai Europe | ${config.siteTitle}`} />
    <Project1 />
    <Footer />
  </div>
);

export default Blog;
