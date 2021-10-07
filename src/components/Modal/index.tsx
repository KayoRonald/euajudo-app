/* eslint no-trailing-spaces: "off" */
import React from 'react';
import {
  Text, Modal as ChakraModal, ModalOverlay,
  ModalContent, ModalHeader, ModalFooter, ModalBody,
  ModalCloseButton, useDisclosure, Divider, Button,
  Tabs, Tab, TabList, TabPanels, TabPanel, LinkBox,
  LinkOverlay, Box, Alert, AlertIcon,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FiArrowRight, FiMessageSquare } from 'react-icons/fi';

type ModalProps = {
  namePoint: string;
  about: string;
  whatsapp: string;
  responsibleName: string;
  typePoint: string;
  latitudeCoords: any;
  longitudeCoords: any;
};
const Modal: React.FC<ModalProps> = ({
  namePoint, about, whatsapp, responsibleName, typePoint,
  latitudeCoords, longitudeCoords,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <React.Fragment key="keyFor">
      <Button colorScheme="red" onClick={onOpen} rightIcon={<FiArrowRight />}>
        Abrir
      </Button>
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader isTruncated>
            {namePoint}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs variant="enclosed">
              <TabList>
                <Tab>Informações</Tab>
                <Tab>Ver rotas</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Text noOfLines={3}>{about}</Text>
                  <Box mt={2}>
                    <Alert status="success">
                      <AlertIcon />
                      {typePoint === 'sim' ? 'Ponto de vacinação' : 'Ponto de doação'}
                    </Alert>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
                    <Text my="2">
                      <LinkOverlay
                        target="_blank"
                        href={`https://www.google.com.br/maps/dir/?api=1&destination=${latitudeCoords},${longitudeCoords}`}
                      >
                        Ver rotas no Google Maps <ExternalLinkIcon mx="2px" />
                      </LinkOverlay>
                    </Text>
                  </LinkBox>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
          <ModalFooter justifyContent="space-around">
            <Button
              as="a" href={`https://api.whatsapp.com/send?phone=${whatsapp}`} target="_blank"
              rightIcon={<FiMessageSquare />} colorScheme="blue" variant="outline"
            >
              Whatsapp
            </Button>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
          <Divider />
          <ModalFooter justifyContent="center">
            <Text>Cadastrado por:</Text>
            <Text marginLeft={2} isTruncated>
              {
                responsibleName[0].toLocaleUpperCase()
                + responsibleName.substring(1, responsibleName.length).toLowerCase()
              }
            </Text>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </React.Fragment>
  );
};
export default Modal;