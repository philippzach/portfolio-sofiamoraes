import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import Project11 from '../components/Project11-Cafeblack/Project11';

const Blog = () => (
  <div>
    <Helmet title={`Cafe Bar Black1966 | ${config.siteTitle}`} />
    <Project11 />
    <Footer />
  </div>
);

export default Blog;
