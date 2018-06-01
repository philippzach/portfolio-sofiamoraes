import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import Project5 from '../components/Project5-Turquoise/Project5';

const Blog = () => (
  <div>
    <Helmet title={`Turquoise Media | ${config.siteTitle}`} />
    <Project5 />
    <Footer />
  </div>
);

export default Blog;
