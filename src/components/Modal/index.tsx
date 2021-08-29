/* eslint no-trailing-spaces: "off" */
import React from 'react';
import {
  Text, Modal as ChakraModal, ModalOverlay,
  ModalContent, ModalHeader, ModalFooter, ModalBody,
  ModalCloseButton, useDisclosure, Divider, Button, Box
} from '@chakra-ui/react';
import { FiArrowRight, FiMessageSquare } from 'react-icons/fi';

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
            Sobre:
            <Box px={4} color="white">
              <Text>{about}</Text>
            </Box>
            <Text>È um Ponto de vacinação? {typePoint}</Text>
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
              {responsibleName[0].toLocaleUpperCase()+responsibleName.substring(1, responsibleName.length)}
            </Text>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </React.Fragment>
  );
};
export default Modal;
