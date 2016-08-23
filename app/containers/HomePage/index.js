/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import Banner from 'containers/Banner';
import Features from 'containers/Features';
import Block from 'containers/Block';
import CallToAction from 'containers/CallToAction';
import Backers from 'containers/Backers';
import styles from './styles.css';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <main className={styles.main}>
        <Banner
          title="Start messaging your customers today"
          subtitle="Everything you need to chat with customers wherever they are and grow your business"
          ctatext="Get Started - Free"
          image="http://website.smooch.io/static_assets/images/home/retina/img-diagram@2x.png"
        />
        <Features
          title="Messaging, solved"
          subtitle="Implementing a messaging strategy should be easy – now it is"
          ctatext="Explore Features"
        />
        <Block
          subtitle="Start chatting with customers on Messenger instantly to answer questions, collect payments or fullfill appointments. Answer from your existing business systems with no coding."
          image="https://website.smooch.io/static_assets/images/sk-facebook/retina/phone-messenger@2x.png"
          ctatext="Learn More"
          accent="New ways to message"
          title="Smooch for Facebook Messenger Platform"
        />
        <CallToAction
          title="Start messaging your customers today"
          subtitle="Everything you need to chat with customers wherever they are and grow your business"
          ctatext="Get Started - Free"
        />
        <Backers
          title="Successful startups and leading companies rely on Smooch"
          subtitle="Smooch handles millions of conversations for thousands of businesses, every month"
        />
      </main>
    );
  }
}
