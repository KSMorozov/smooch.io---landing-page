/*
 *
 * Footer
 * Contains Logo and Links
 */

import React from 'react';
import styles from './styles.css';

export default class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <footer className={styles.footer}>
        <section className={`row expanded ${styles.content}`}>
          <section className="small-12 large-expand columns">
            <a href="#"><img width="98" height="20" src="https://website.smooch.io/static_assets/images/header/svg/logo.svg" alt="logo" /></a>
            <p>© Smooch Technologies Inc. 2015</p>
          </section>
          <section className="small-12 medium-expand columns">
            <h4 className="text-menu">Product</h4>
            <ul>
              <li>
                <a className="text-body" href="#">Why Smooch?</a>
              </li>
              <li>
                <a className="text-body" href="#">Smooch Business</a>
              </li>
              <li>
                <a className="text-body" href="#">Pricing</a>
              </li>
            </ul>
          </section>
          <section className="small-12 medium-expand columns">
            <h4 className="text-menu">Features</h4>
            <ul>
              <li>
                <a className="text-body" href="#">Cross-Channel Messaging</a>
              </li>
              <li>
                <a className="text-body" href="#">Live Web Messaging</a>
              </li>
              <li>
                <a className="text-body" href="#">In-App Messaging</a>
              </li>
              <li>
                <a className="text-body" href="#">Social Messaging</a>
              </li>
              <li>
                <a className="text-body" href="#">Programmable SMS</a>
              </li>
              <li>
                <a className="text-body" href="#">Rich Messaging</a>
              </li>
              <li>
                <a className="text-body" href="#">Messaging Developer API</a>
              </li>
              <li>
                <a className="text-body" href="#">Chatbot Connectors</a>
              </li>
              <li>
                <a className="text-body" href="#">Integrations</a>
              </li>
            </ul>
          </section>
          <section className="small-12 medium-expand columns">
            <h4 className="text-menu">Company</h4>
            <ul>
              <li>
                <a className="text-body" href="#">About Us</a>
              </li>
              <li>
                <a className="text-body" href="#">Customers</a>
              </li>
              <li>
                <a className="text-body" href="#">Jobs</a>
              </li>
              <li>
                <a className="text-body" href="#">Blog</a>
              </li>
              <li>
                <a className="text-body" href="#">Twitter</a>
              </li>
            </ul>
          </section>
          <section className="small-12 medium-expand columns">
            <h4 className="text-menu">Support</h4>
            <ul>
              <li>
                <a className="text-body" href="#">Help</a>
              </li>
              <li>
                <a className="text-body" href="#">Docs</a>
              </li>
              <li>
                <a className="text-body" href="#">Get a Demo</a>
              </li>
              <li>
                <a className="text-body" href="#">Status</a>
              </li>
              <li>
                <a className="text-body" href="#">Terms of Service</a>
              </li>
              <li>
                <a className="text-body" href="#">Privacy Policy</a>
              </li>
              <li>
                <a className="text-body" href="#">Login</a>
              </li>
            </ul>
          </section>
          <section className="small-12 medium-expand columns">
            <h4 className="text-menu">Get In Touch</h4>
            <ul>
              <li>
                <a className="text-body" href="#">Contact</a>
              </li>
            </ul>
          </section>
        </section>
      </footer>
    );
  }
}
