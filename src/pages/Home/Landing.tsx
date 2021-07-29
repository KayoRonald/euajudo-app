import React from 'react';
import Helmet from 'react-helmet';
import Container from '../../containers/Jumbotron/';
import Hero from '../../containers/Hero/';
import Accordion from '../../components/AccordionInfo/';
import FooterContainer from '../../containers/Footer/';
import Banner from '../../components/Banner/';
export default function Landing() {
  return (
    <React.Fragment key="key">
      <Helmet title="Eu Ajudo | Venha ajudar sua comunidade!" />
      <Hero />
      <Container />
      <Accordion />
      <Banner />
      <FooterContainer />
    </React.Fragment>
  );
}
