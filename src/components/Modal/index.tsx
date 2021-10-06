/* eslint no-trailing-spaces: "off" */
import React from 'react';
import {
  Text, Modal as ChakraModal, ModalOverlay,
  ModalContent, ModalHeader, ModalFooter, ModalBody,
  ModalCloseButton, useDisclosure, Divider, Button, PopoverContent,
  Tabs, Tab, TabList, TabPanels, TabPanel, LinkBox, PopoverCloseButton,
  LinkOverlay, Popover, PopoverTrigger, PopoverArrow, PopoverHeader,
  PopoverBody, chakra,
} from '@chakra-ui/react';
import { FiArrowRight, FiMessageSquare, FiAlertOctagon } from 'react-icons/fi';

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
            <AlertInfo typePoint={typePoint}><FiAlertOctagon /></AlertInfo>
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
                  <Text>{about}</Text>
                </TabPanel>
                <TabPanel>
                  <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
                    <Text my="2">
                      <LinkOverlay
                        href={`https://www.google.com.br/maps/dir/?api=1&destination=${latitudeCoords},${longitudeCoords}`}
                      >
                        Ver rotas no Google Maps
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
              whatsapp
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

const AlertInfo = ({ children, typePoint }: any) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>{children}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>É um ponto de vacinação?</PopoverHeader>
        <PopoverBody>
          <chakra.p>
            {typePoint}
          </chakra.p>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};