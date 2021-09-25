import React from 'react';
import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box, Container, Heading, Center,
} from '@chakra-ui/react';
import { FaqData } from '../../data/faq';
import { Circle, StrongText, SpanText } from './style';

const Accordion: React.FC = () => {
  return (
    <Container maxWidth="74ch" mt="22px">
      <Center marginBottom={5}>
        <Heading as="h2">Perguntas frequentes</Heading>
      </Center>
      <ChakraAccordion allowToggle>
        {FaqData.map((faq) => (
          <AccordionItem key={faq.id} borderTopWidth={0} borderBottomWidth={0} marginBottom="3px">
            <h2>
              <AccordionButton
                padding="0.8em 1.2em 0.8em 1.2em"
                background="gray.700"
                _hover={{ backgroundColor: 'gray.600' }}
              >
                <Box flex="1" textAlign="left">
                  <StrongText>
                    <SpanText>
                      0
                      <span style={{ color: '#04D361' }}>
                        {faq.id}
                        .
                      </span>
                    </SpanText>
                  </StrongText>
                  {' '}
                  {faq.header}
                </Box>
                <Circle>
                  <AccordionIcon />
                </Circle>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} background="#2d2d2d">
              {faq.body}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </ChakraAccordion>
    </Container>
  );
};

export default Accordion;