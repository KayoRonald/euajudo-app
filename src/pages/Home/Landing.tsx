import React, { Fragment } from 'react';
import Container from '../../containers/jumbotron';
import Hero from '../../containers/hero'

export default function Landing() {
  return (
    <Fragment>
      <Hero />
      <Container />
    </Fragment>
  );
}
