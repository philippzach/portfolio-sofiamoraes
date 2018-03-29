import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import { push as Menu } from 'react-burger-menu';
import config from '../../../config/SiteConfig';
import styles from './Navigation.module.scss';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }
  render() {
    return (
      <header className={styles.header}>
        <Logo />
        <Navbar />
        {/* }<div>
          <div>
            <Menu right isOpen={this.state.menuOpen} onStateChange={this.handleStateChange} width="25%">
              <Link to="/about" activeClassName="active" onClick={() => this.closeMenu()}>
                About
              </Link>
              <Link to="/blog" activeClassName="active" onClick={() => this.closeMenu()}>
                Blog
              </Link>
              <div style={{ backgroundColor: 'yellow' }}>
                <a href="https://www.instagram.com/lekoarts.de" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://www.behance.net/lekoarts" target="_blank" rel="noopener noreferrer">
                  <FaVimeo />
                </a>
                <a href="https://dribbble.com/LeKoArts" target="_blank" rel="noopener noreferrer">
                  <FaPinterest />
                </a>
              </div>
            </Menu>
          </div>
        </div>{ */}
      </header>
    );
  }
}

/*
<header>
  <nav>
    <Link to="/about">
      About
    </Link>
    <Link to="/blog">
      Blog
    </Link>
    <Link to="/hireme">
      Hire Me
    </Link>
  </nav>
</header>
      
*/
