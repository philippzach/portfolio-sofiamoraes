import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import Project14 from '../components/Project14-Caroki/Project14';

const Blog = () => (
  <div>
    <Helmet title={`Caroki | ${config.siteTitle}`} />
    <Project14 />
    <Footer />
  </div>
);

export default Blog;
