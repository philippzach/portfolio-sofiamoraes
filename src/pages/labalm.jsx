import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import Project2 from '../components/Project2-LaBalm/Project2';

const Blog = () => (
  <div>
    <Helmet title={`LA Balm | ${config.siteTitle}`} />
    <Project2 />
    <Footer />
  </div>
);

export default Blog;
