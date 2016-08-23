/* eslint-disable jsx-a11y/href-no-hash */
/*
 *
 * Header Component
 * Contains Logo and Navigation
 */

import React from 'react';
import styles from './styles.css';

import Logo from 'vendor/logo.svg';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { mobilenav: false };
    this.handleHamburgerTap = this.handleHamburgerTap.bind(this);
  }

  handleHamburgerTap() {
    this.setState({ mobilenav: !this.state.mobilenav });
  }

  render() {
    return (
      <header className={`thin-border-bottom ${styles.header} ${this.state.mobilenav ? styles.mobileheader : ''}`}>
        <section className={styles.header_holder}>
          <section className={styles.logo_holder}>
            <a href="#">
              <img src={Logo} alt="Brand" />
            </a>
          </section>
          <nav className={styles.menu_holder}>
            <ul>
              <li>
                <a href="#">Startup</a>
              </li>
              <li>
                <a href="#">Minimal</a>
              </li>
              <li>
                <a href="#">Landing Page</a>
              </li>
            </ul>
          </nav>
          <nav className={`${styles.mobile_menu_holder} ${this.state.mobilenav ? styles.show_mobile_menu_holder : ''}`}>
            <ul>
              <li>
                <a href="#" onTouchTap={this.handleHamburgerTap}>Startup</a>
              </li>
              <li>
                <a href="#" onTouchTap={this.handleHamburgerTap}>Minimal</a>
              </li>
              <li>
                <a href="#" onTouchTap={this.handleHamburgerTap}>Landing Page</a>
              </li>
            </ul>
          </nav>
          <section className={`${styles.hamburger} ${this.state.mobilenav ? styles.isactive : ''}`}>
            <a href="#" className={styles.box} onTouchTap={this.handleHamburgerTap}>
              <span className={styles.inner}></span>
            </a>
          </section>
        </section>
      </header>
    );
  }
}

export default Header;
