import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import Project9 from '../components/Project9-Tech/Project9';

const Blog = () => (
  <div>
    <Helmet title={`Swiss Startup Tech | ${config.siteTitle}`} />
    <Project9 />
    <Footer />
  </div>
);

export default Blog;
