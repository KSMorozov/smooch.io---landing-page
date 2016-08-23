import React from 'react';

import styles from './styles.css'; // eslint-disable-line no-unused-vars

class Backers extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { title, subtitle } = this.props;
    return (
      <section className={`thick-border-bottom ${styles.backers}`}>
        <section className={styles.content}>
          <h1 className="text-display-1">{title}</h1>
          <p className="text-title">{subtitle}</p>
          <ul className="row expanded">
            <li className="small-4 large-expand columns">
              <img alt="partner" width="139" height="30" src="https://website.smooch.io/static_assets/images/customers/retina/logo-target@2x.png" />
            </li>
            <li className="small-4 large-expand columns">
              <img alt="partner" width="123" height="20" src="https://website.smooch.io/static_assets/images/customers/retina/logo-uhaul@2x.png" />
            </li>
            <li className="small-4 large-expand columns">
              <img alt="partner" width="105" height="36" src="https://website.smooch.io/static_assets/images/customers/retina/logo-safari@2x.png" />
            </li>
            <li className="small-4 large-expand columns">
              <img alt="partner" width="39" height="60" src="https://website.smooch.io/static_assets/images/customers/retina/logo-playboy@2x.png" />
            </li>
            <li className="small-4 large-expand columns">
              <img alt="partner" width="88" height="43" src="https://website.smooch.io/static_assets/images/customers/retina/logo-kpcb-02@2x.png" />
            </li>
            <li className="small-4 large-expand columns">
              <img alt="partner" width="120" height="22" src="https://website.smooch.io/static_assets/images/customers/retina/logo-harrys-02@2x.png" />
            </li>
            <li className="columns">
              <img alt="partner" width="126" height="42" src="https://website.smooch.io/static_assets/images/customers/retina/logo-frankoak@2x.png" />
            </li>
            <li className="columns">
              <img alt="partner" width="131" height="26" src="https://website.smooch.io/static_assets/images/customers/retina/logo-buffer@2x.png" />
            </li>
          </ul>
          <ul className="row expanded">
            <li>
              <img className={styles.avatar} src="https://website.smooch.io/static_assets/images/customers/retina/avatar-img-02@2x.jpg" alt="User" />
              <blockquote>
                <q className="text-menu">Smooch solves all of our messaging needs and allow us to remain focused on building richer, deeper features. It's saving us so much time.</q>
                <cite className="text-menu">— Mathilde Collin</cite>
                <div>
                  <img width="97" height="21" src="https://website.smooch.io/static_assets/images/customers/retina/logo-front@2x.png" alt="company" />
                </div>
              </blockquote>
            </li>
            <li>
              <img className={styles.avatar} src="https://website.smooch.io/static_assets/images/customers/retina/avatar-img-01@2x.jpg" alt="User" />
              <blockquote>
                <q className="text-menu">Smooch solves all of our messaging needs and allow us to remain focused on building richer, deeper features. It's saving us so much time.</q>
                <cite className="text-menu">— Mathilde Collin</cite>
                <div>
                  <img width="78" height="20" src="https://website.smooch.io/static_assets/images/customers/retina/logo-repai@2x.png" alt="company" />
                </div>
              </blockquote>
            </li>
            <li>
              <img className={styles.avatar} src="https://website.smooch.io/static_assets/images/customers/retina/avatar-img-03@2x.jpg" alt="User" />
              <blockquote>
                <q className="text-menu">Smooch solves all of our messaging needs and allow us to remain focused on building richer, deeper features. It's saving us so much time.</q>
                <cite className="text-menu">— Mathilde Collin</cite>
                <div>
                  <img width="84" height="29" src="https://website.smooch.io/static_assets/images/customers/retina/logo-frankoak-sm@2x.png" alt="company" />
                </div>
              </blockquote>
            </li>
          </ul>
        </section>
      </section>
    );
  }
}

Backers.propTypes = {
  subtitle: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

Backers.defaultProps = {
  subtitle: 'Backers subtitle',
  title: 'Backers Title',
};

export default Backers;
