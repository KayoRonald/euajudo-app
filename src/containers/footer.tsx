import React from 'react';
import { Footer } from '../components';
import { Link } from 'react-router-dom';
import { Box, Stack, Circle, Link as ChakraLink } from '@chakra-ui/react';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import * as ROUTES from '../constants/routes';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Dúvida? Contate-nos.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Texto>
            <Link to="/" target="_blank">Ajuda/FAQ</Link>
          </Footer.Texto>
          <Footer.Texto>Entre em contato</Footer.Texto>
          <Footer.Texto>Informações corporativas</Footer.Texto>
        </Footer.Column>

        <Footer.Column>
          <Footer.Texto>
             <ChakraLink href="https://support-fa-animation-app.vercel.app/" isExternal>
                Centro de ajuda <ExternalLinkIcon mx="2px" />
             </ChakraLink>
          </Footer.Texto>
          <Footer.Texto>Termos de uso</Footer.Texto>
          <Footer.Texto>Entre em contato</Footer.Texto>
        </Footer.Column>

        <Footer.Column>
          <Footer.Texto>
             <a href={ROUTES.TEAM}>Equipe</a>
          </Footer.Texto>
          <Footer.Texto>Privacidade</Footer.Texto>
          <Footer.Texto>
             <ChakraLink href="https://fast.com/pt/" isExternal>
                Teste de Internet <ExternalLinkIcon mx="2px" />
             </ChakraLink>
          </Footer.Texto>
        </Footer.Column>

        <Footer.Column>
          <Footer.Texto>Reportar falhas</Footer.Texto>
          <Footer.Texto>Politica de Cookies</Footer.Texto>
          <Footer.Texto>Pedidos de animes</Footer.Texto>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Box textAlign="center">
        <Stack mt={4} direction="row" spacing="12px" justify="center">
          <Circle
            target="_blank"
            as="a"
            rel="noopener"
            size="40px"
            bg="teal.500"
            shadow="lg"
            href="https://twitter.com/PhoenixStudioBr"
          >
            <AiFillTwitterCircle />
          </Circle>
          <Circle
            target="_blank"
            as="a"
            rel="noopener"
            size="40px"
            bg="teal.500"
            shadow="lg"
          >
            <AiFillInstagram />
          </Circle>
          <Circle
            target="_blank"
            as="a"
            rel="noopener"
            size="40px"
            bg="teal.500"
            shadow="lg"
            href={ROUTES.DISCORD}
          >
            <FaDiscord />
          </Circle>
        </Stack>
      </Box>
    </Footer>
  );
}
