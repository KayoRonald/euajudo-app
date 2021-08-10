/* eslint no-trailing-spaces: "off" */
import React from 'react';
import {
  Text, Modal as ChakraModal, ModalOverlay,
  ModalContent, ModalHeader, ModalFooter, ModalBody,
  ModalCloseButton, useDisclosure, Divider, Button
} from '@chakra-ui/react';

import { FiArrowRight } from 'react-icons/fi';
type ModalProps = {
  namePoint: string;
  about: string;
  whatsapp: string;
  responsibleName: string;
  typePoint: string;
};

const Modal: React.FC<ModalProps> = ({
  namePoint, about, whatsapp, responsibleName, typePoint
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
          <ModalHeader>{namePoint}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Sobre
            <Text>{about}</Text>
            <Text>whatsapp: {whatsapp}</Text>
            <Text>{about}</Text>
            <Text>È um Ponto de vacinação? {typePoint}</Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
          <Divider />
          <ModalFooter justifyContent="center">
            <Text>Cadastrado por:</Text>
            <Text marginLeft={2} isTruncated>
              {responsibleName.toLowerCase()}
            </Text>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </React.Fragment>
  );
};

export default Modal;