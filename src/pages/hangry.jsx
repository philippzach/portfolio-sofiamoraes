import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import Project13 from '../components/Project13-Hangry/Project13';

const Blog = () => (
  <div>
    <Helmet title={`Hangry | ${config.siteTitle}`} />
    <Project13 />
    <Footer />
  </div>
);

export default Blog;
