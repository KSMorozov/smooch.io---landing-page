import React from 'react';

import styles from './styles.css'; // eslint-disable-line no-unused-vars

class Block extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { accent, title, subtitle, ctatext, image } = this.props;
    return (
      <section className={styles.block}>
        <section className={`row expanded align-middle align-justify ${styles.content}`}>
          <section className="small-12 large-4 columns small-order-1">
            <h3 className="text-menu">{accent}</h3>
            <h1 className="text-display-1">{title}</h1>
            <p className="text-subhead">{subtitle}</p>
            <a href="#">{ctatext}</a>
          </section>
          <section className="small-12 large-8 columns small-order-2">
            <img src={image} alt="Block Pic" />
          </section>
        </section>
      </section>
    );
  }
}

Block.propTypes = {
  subtitle: React.PropTypes.string.isRequired,
  ctatext: React.PropTypes.string.isRequired,
  accent: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

Block.defaultProps = {
  image: 'http://website.smooch.io/static_assets/images/home/retina/img-diagram@2x.png',
  ctatext: 'Call to Action Button',
  subtitle: 'Block subtitle',
  accent: 'Block Accent',
  title: 'Block Title',
};

export default Block;
