import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import Project15 from '../components/Project15-Fund/Project15';

const Blog = () => (
  <div>
    <Helmet title={`Swiss Startup Fund | ${config.siteTitle}`} />
    <Project15 />
    <Footer />
  </div>
);

export default Blog;
