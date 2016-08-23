import React from 'react';

import styles from './styles.css'; // eslint-disable-line no-unused-vars

class Banner extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { title, subtitle, ctatext, image } = this.props;
    return (
      <section className={styles.banner}>
        <section className={styles.content}>
          <h1 className="text-display-2">{title}</h1>
          <h2 className="text-subhead">{subtitle}</h2>
          <section>
            <a href="#" className="btn">{ctatext}</a>
          </section>
          <img src={image} alt="banner home" />
        </section>
      </section>
    );
  }
}

Banner.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired,
  ctatext: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
};

Banner.defaultProps = {
  image: 'http://website.smooch.io/static_assets/images/home/retina/img-diagram@2x.png',
  ctatext: 'Call to Action Button',
  subtitle: 'Banner subtitle',
  title: 'Banner Title',
};

export default Banner;
