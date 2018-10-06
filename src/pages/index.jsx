import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
// import ProjectListing from '../components/ProjectListing/ProjectListing';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
//import { render } from 'preact';

class Index extends React.Component {
  componentDidMount() {
    <Helmet>
      <script>
        {(function(d, s, i) {
          const j = d.createElement('script');
          j.async = true;
          j.id = 'notifia';
          j.src = 'https://static.notifia.io/widget.js';
          j.setAttribute('initialize', i);
          d.head.appendChild(j);
        })(document, 'script', 'smbgQzhEBO')}
      </script>
    </Helmet>;
  }
  render() {
    return (
      <div className="container index-container">
        <Helmet>
          <title>{config.siteTitle}</title>
        </Helmet>
        <Home />
        <div>{/* } <ProjectListing projectEdges={projectEdges} /> { */}</div>
        <Footer />
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off"
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            service
            client
            cover {
              childImageSharp {
                sizes(maxWidth: 850, quality: 90, traceSVG: { color: "#f3f3f3" }) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
 */
