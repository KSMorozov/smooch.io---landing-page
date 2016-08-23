import React from 'react';

import styles from './styles.css'; // eslint-disable-line no-unused-vars

class CallToAction extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { title, subtitle, ctatext } = this.props;
    return (
      <section className={styles.calltoaction}>
        <section className={styles.content}>
          <h1 className="text-display-1">{title}</h1>
          <section>
            <a href="#" className="btn">{ctatext}</a>
          </section>
        </section>
      </section>
    );
  }
}

CallToAction.propTypes = {
  subtitle: React.PropTypes.string.isRequired,
  ctatext: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

CallToAction.defaultProps = {
  subtitle: 'CallToAction subtitle',
  ctatext: 'Call to Action Button',
  title: 'CallToAction Title',
};

export default CallToAction;
