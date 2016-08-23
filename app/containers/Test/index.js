/*
 *
 * Test
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectTest from './selectors';
import styles from './styles.css';

export class Test extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.test}>
      </div>
    );
  }
}

const mapStateToProps = selectTest();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
