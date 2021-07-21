import React, { Fragment } from 'react';
import Container from '../../containers/Jumbotron/';
import Hero from '../../containers/Hero/'
import Accordion from '../../components/AccordionInfo/'
import FooterContainer from '../../containers/Footer/'
import Helmet from 'react-helmet';
export default function Landing() {
  return (
    <Fragment>
      <Helmet title="Eu Ajudo | Venha ajudar sua comunidade!" />
      <Hero />
      <Container />
      <Accordion />
      <FooterContainer />
    </Fragment>
  );
}
