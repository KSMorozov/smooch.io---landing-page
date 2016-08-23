/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Header from 'containers/Header';
import Footer from 'containers/Footer';

import typography from 'theme/typography.css'; // eslint-disable-line no-unused-vars
import styles from './styles.css'; // eslint-disable-line no-unused-vars
import links from 'theme/links.css'; // eslint-disable-line no-unused-vars
import misc from 'theme/misc.css'; // eslint-disable-line no-unused-vars

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        {React.Children.toArray(this.props.children)}
        <Footer />
      </div>
    );
  }
}
