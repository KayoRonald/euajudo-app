import React from 'react';
import Helmet from 'react-helmet';
import { Container, Hero, Footer } from '../../containers';
import { Banner, Accordion } from '../../components';
export default function Landing() {
  return (
    <React.Fragment key="key">
      <Helmet title="Eu Ajudo | Venha ajudar sua comunidade!" />
      <Hero />
      <Container />
      <Accordion />
      <Banner />
      <Footer />
    </React.Fragment>
  );
}
