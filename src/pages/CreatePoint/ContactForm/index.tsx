import React from 'react'
import {
  AiOutlineUserDelete,
  AiOutlineMail,
  AiFillFileText,
  AiFillPhone
} from 'react-icons/ai';
import {
  Box,
  FormControl, FormLabel, Button, Alert, AlertIcon
} from '@chakra-ui/react';
import Leaflet, { LeafletMouseEvent } from "leaflet"
import { Map as MapContainer, Marker, TileLayer } from 'react-leaflet'
import mapMarker from '../../../image/svg/map-marker.svg';
import Input from '../../../components/Input/';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarker,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -70]
})

const ContactForm: React.FC = () => {
  const [position, setPosition] = React.useState({ latitude: 0, longitude: 0 })

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng
    setPosition({ latitude: lat, longitude: lng })
  }
  return (
    <Box my={8} textAlign="left">
      <MapContainer
        center={[-6.4019317, -36.4511400]}
        zoom={15.7}
        style={
          { width: '100%', height: 280, borderRadius: 7 }
        }
        onclick={handleMapClick}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2F5b2t5bGVyIiwiYSI6ImNrcG55N3RnaDBrdnkydm13YTIwdDQ2MXAifQ.mPGFip4w4KhoZSqmUqoY2w`}
        />
        <Marker
          icon={mapIcon}
          interactive={false}
          position={[position.latitude, position.longitude]}
        />
      </MapContainer>
      <AlertPoint />
      <FormControl id="nome" mt={4}>
        <FormLabel>Nome:</FormLabel>
        <Input
          type="text"
          placeholder="Insira o seu nome"
          name="name"
          iconLeft={<AiOutlineUserDelete />}
        />
      </FormControl>
      <FormControl id="email" mt={2}>
        <FormLabel>Email:</FormLabel>
        <Input
          type="email"
          name="email"
          placeholder="Insira o seu endereço de email"
          iconLeft={<AiOutlineMail />}
        />
      </FormControl>
      <FormControl id="descricao" mt={2}>
        <FormLabel>Descrição:</FormLabel>
        <Input
          type="text"
          name="subjetc"
          placeholder="Insira a sua descrição"
          iconLeft={<AiFillFileText />}
        />
      </FormControl>
      <FormControl id="descricao" mt={2}>
        <FormLabel>Número para contato:</FormLabel>
        <Input
          type="text"
          name="subjetc"
          placeholder="Insira a sua descrição"
          iconLeft={<AiFillPhone />}
        />
      </FormControl>
      <ButtonSend />
    </Box>
  )
}

export default ContactForm;

const ButtonSend = () => {
  return (
    <Button
      type="submit"
      width="full"
      mt={4}
      outline="none"
      _hover={{ backgroundColor: 'purple.600' }}
      backgroundColor="purple.500"
    >
      Enviar
    </Button>
  )
}

const AlertPoint = () => {
  return (
    <Alert status="info" mt={4}>
      <AlertIcon />
      Escolhar um local no mapa
    </Alert >
  )
}