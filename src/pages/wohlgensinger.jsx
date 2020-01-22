import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import Project8 from '../components/Project8-Wohlgensinger/Project8';

const Blog = () => (
  <div>
    <Helmet title={`Wohlgensinger AG | ${config.siteTitle}`} />
    <Project8 />
    <Footer />
  </div>
);

export default Blog;
