import React, { Fragment } from 'react';
import Container from '../../containers/Jumbotron/index';
import Hero from '../../containers/Hero/index'
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
