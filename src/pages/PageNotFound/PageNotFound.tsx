import React from 'react';
import Helmet from 'react-helmet';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { VStack, Button, Heading, Text, Container } from '@chakra-ui/react';
import animationData2 from '../../json/animation/62541-404-error-robot.json';
import FooterContainer from '../../containers/Footer/';

type LocationProps = {
  location?: any;
  pathname?: any;
}

const PageNotFound: React.FC<LocationProps> = ({ location, pathname }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
  };
  const { goBack } = useHistory();
  return (
    <React.Fragment key="key">
      <Helmet>
        <title>Eu Ajudo | Ops {location.pathname}</title>
      </Helmet>
      <VStack justify="center" spacing="4" as="section" mt={["20", null, "30"]} textAlign="center">
        <Heading>404 | Page Not Found</Heading>
        <Text fontSize={{ md: "xl" }}>
          A página {location.pathname} não existe ou foi removida😢
        </Text>
          <Button as="a" aria-label="Voltar" onClick={goBack} leftIcon={<AiOutlineArrowRight />} colorScheme="teal" size="lg">
            Voltar
          </Button>
      </VStack>
      <Container>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      </Container>
      <FooterContainer />
    </React.Fragment>
  );
};

export default PageNotFound;