import React from 'react';

import styles from './styles.css'; // eslint-disable-line no-unused-vars

class Features extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { title, subtitle, ctatext } = this.props;
    return (
      <section className={`thick-border-bottom ${styles.features}`}>
        <section className={styles.content}>
          <h1 className="text-display-1">{title}</h1>
          <p className="text-subhead">{subtitle}</p>
          <ul className="row expanded">
            <li className="small-12 medium-4 columns">
              <img alt="Feature 1" width="120" height="96" src="https://website.smooch.io/static_assets/images/home/retina/icon-channels@2x.png" />
              <p className="text-menu">Grow</p>
              <h1 className="text-headline">More channels to do business</h1>
              <p className="text-subhead">Get distribution across channels and talk to customers over social messaging apps, SMS, web chat or in-app without additional development time. Conversations automatically sync everywhere.</p>
            </li>
            <li className="small-12 medium-4 columns">
              <img alt="Feature 2" width="147" height="96" src="https://website.smooch.io/static_assets/images/home/retina/icon-communication@2x.png" />
              <p className="text-menu">Connect</p>
              <h1 className="text-headline">Hassle-free communications</h1>
              <p className="text-subhead">Connect cross-channel conversations and data to any CRM or business tool you already use for deeper, smarter and more personalized customer interactions.</p>
            </li>
            <li className="small-12 medium-4 columns">
              <img alt="Feature 3" width="112" height="96" src="https://website.smooch.io/static_assets/images/home/retina/icon-more@2x.png" />
              <p className="text-menu">Experience</p>
              <h1 className="text-headline">Rich, engaging interactions</h1>
              <p className="text-subhead">Receive and send images, gifs, videos and more across channels. Add commerce, scheduling and action buttons to your messages. Plus, build bots that automate common workflows.</p>
            </li>
          </ul>
          <section>
            <a href="#" className="btn">{ctatext}</a>
          </section>
        </section>
      </section>
    );
  }
}

Features.propTypes = {
  subtitle: React.PropTypes.string.isRequired,
  ctatext: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

Features.defaultProps = {
  ctatext: 'Call to Action Button',
  subtitle: 'Features subtitle',
  title: 'Features Title',
};

export default Features;
