import React, { Fragment } from 'react';
import Container from '../../containers/Jumbotron/';
import Hero from '../../containers/Hero/'
import Accordion  from '../../components/AccordionInfo/'
import FooterContainer from '../../containers/Footer/'

export default function Landing() {
  return (
    <Fragment>
      <Hero />
      <Container />
      <Accordion />
      <FooterContainer/>
    </Fragment>
  );
}
