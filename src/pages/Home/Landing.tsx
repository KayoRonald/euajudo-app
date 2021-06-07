import React, { Fragment } from 'react';
import Container from '../../containers/jumbotron';
import Hero from '../../containers/hero'
import Accordion  from '../../components/AccordionInfo/'
export default function Landing() {
  return (
    <Fragment>
      <Hero />
      <Container />
      <Accordion />
    </Fragment>
  );
}
