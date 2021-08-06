import React from 'react';
import Helmet from 'react-helmet';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Stack, Button, Center, Text } from '@chakra-ui/react';
import { Container } from './style';
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
      <Container>
        <Helmet>
          <title>Eu Ajudo | Ops {location.pathname}</title>
        </Helmet>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
        <Center>
          <Text textAlign="center">A página que você está procurando não existe ou foi removida</Text>
        </Center>

        <Stack direction="row" spacing={4} align="center" mt={3}>
            <Button as="a" onClick={goBack} cursor="pointer" colorScheme="teal" variant="solid" color="#000" leftIcon={<AiOutlineArrowRight />}>
              Voltar
            </Button>
        </Stack>
      </Container>
      <FooterContainer />
    </React.Fragment>
  );
};

export default PageNotFound;