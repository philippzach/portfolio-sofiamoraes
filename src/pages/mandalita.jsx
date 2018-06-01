import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import Project7 from '../components/Project7-Mandalita/Project7';

const Blog = () => (
  <div>
    <Helmet title={`Mandalita | ${config.siteTitle}`} />
    <Project7 />
    <Footer />
  </div>
);

export default Blog;
