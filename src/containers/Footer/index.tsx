import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Link as ChakraLink } from '@chakra-ui/react';
import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaDiscord } from 'react-icons/fa';

import { Footer } from '../../components';
import * as ROUTES from '../../constants/routes';
import Circle from './Circle/';

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Dúvida? Contate-nos.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Texto>
            <Link to={ROUTES.HOME} target="_blank">Ajuda/FAQ</Link>
          </Footer.Texto>
          <Footer.Texto>
            <ChakraLink href={ROUTES.APPGITHUB} isExternal>
              Aplicativo pra celular <ExternalLinkIcon mx="2px" />
            </ChakraLink>
          </Footer.Texto>
          <Footer.Texto>Informações corporativas</Footer.Texto>
        </Footer.Column>

        <Footer.Column>
          <Footer.Texto>
            <ChakraLink href={ROUTES.SUPPORT} isExternal>
              Centro de ajuda <ExternalLinkIcon mx="2px" />
            </ChakraLink>
          </Footer.Texto>
          <Footer.Texto>Termos de uso</Footer.Texto>
          <Footer.Texto>
            <ChakraLink href={ROUTES.SENDMAIL} isExternal>
              Entre em contato <ExternalLinkIcon mx="2px" />
            </ChakraLink>
          </Footer.Texto>
        </Footer.Column>

        <Footer.Column>
          <Footer.Texto>Privacidade</Footer.Texto>
          <Footer.Texto>
            <ChakraLink href="https://fast.com/pt/" isExternal>
              Teste de Internet <ExternalLinkIcon mx="2px" />
            </ChakraLink>
          </Footer.Texto>
        </Footer.Column>

        <Footer.Column>
          <Footer.Texto>
            <ChakraLink href={ROUTES.SENDMAIL} isExternal>
              Reportar falhas <ExternalLinkIcon mx="2px" />
            </ChakraLink>
          </Footer.Texto>
          <Footer.Texto>Politica de Cookies</Footer.Texto>
          <Footer.Texto>Sobre o Eu Ajudo</Footer.Texto>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Box textAlign="center">
        <FooterIcon />
      </Box>
    </Footer>
  );
};

const FooterIcon = () => {
  return (
    <Stack mt={4} direction="row" spacing="12px" justify="center">
      <Circle
        link={ROUTES.TWITTER}
      >
        <AiFillTwitterCircle />
      </Circle>
      <Circle
        link={ROUTES.GITHUB}
      >
        <AiFillGithub />
      </Circle>
      <Circle
        link={ROUTES.DISCORD}
      >
        <FaDiscord />
      </Circle>
    </Stack>
  );
};
