/* eslint-disable */
import React from 'react';
import Helmet from 'react-helmet';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { VStack, Button, Heading, Text, Center, Image, Box, Flex } from '@chakra-ui/react';
import FooterContainer from '../../containers/Footer/';

type LocationProps = {
  location?: any;
  pathname?: any;
}

const PageNotFound: React.FC<LocationProps> = ({ location, pathname }) => {
  const { goBack } = useHistory();
  return (
    <React.Fragment key="key">
      <Helmet>
        <title>Eu Ajudo | Ops {location.pathname}</title>
      </Helmet>
      <Flex flexDirection="column" minHeight="100vh" width="full" align="center" justifyContent="center">
				<Box
					px={4}
					width="94%"
					maxWidth="500px"
					borderRadius="sm"
					textAlign="center"
				>
					<Box p={4}>
						<Center as="picture">
							<Image
								w="full"
								rounded="lg"
								loading="lazy"
								maxW="500px"
								shadow="2xl"
								src="https://demos.creative-tim.com/impact-design-system-pro/front/assets/img/illustrations/404.svg"
								alt="Not Found"
							/>
						</Center>
						<VStack justify="center" spacing="4" textAlign="center" as="article">
							<Heading>404 | Page Not Found</Heading>
							<Text fontSize={{ md: "xl" }}>
								Ops! Parece que página {location.pathname}, que você seguiu um link incorreto. 
                Se você acha que isso é um problema para nós, diga-nos.
							</Text>
								<Button
									as="a"
									aria-label="Back to Home"
									colorScheme="teal"
									size="lg"
                  onClick={goBack} 
                  leftIcon={<AiOutlineArrowRight />}
								>
									Back to Home
								</Button>
						</VStack>
					</Box>
				</Box>
			</Flex>
      <FooterContainer />
    </React.Fragment>
  );
};

export default PageNotFound;
