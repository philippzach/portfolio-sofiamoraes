import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import Project10 from '../components/Project10-Powerpods/Project10';

const Blog = () => (
  <div>
    <Helmet title={`PowerPods | ${config.siteTitle}`} />
    <Project10 />
    <Footer />
  </div>
);

export default Blog;
