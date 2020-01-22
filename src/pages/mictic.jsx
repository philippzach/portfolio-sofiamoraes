import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import Project12 from '../components/Project12-Mictic/Project12';

const Blog = () => (
  <div>
    <Helmet title={`Mictic | ${config.siteTitle}`} />
    <Project12 />
    <Footer />
  </div>
);

export default Blog;
