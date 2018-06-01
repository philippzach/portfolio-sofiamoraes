import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import Project6 from '../components/Project6-Quantum/Project6';

const Blog = () => (
  <div>
    <Helmet title={`Camp Bay Lodge | ${config.siteTitle}`} />
    <Project6 />
    <Footer />
  </div>
);

export default Blog;
