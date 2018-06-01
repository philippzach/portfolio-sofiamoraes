import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import Project4 from '../components/Project4-CampBay/Project4';

const Blog = () => (
  <div>
    <Helmet title={`Camp Bay Lodge | ${config.siteTitle}`} />
    <Project4 />
    <Footer />
  </div>
);

export default Blog;
