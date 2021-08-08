import React from 'react';
import {
  AiOutlineUserDelete,
  AiFillFileText,
  AiFillPhone,
  AiOutlineTeam,
} from 'react-icons/ai';
import { GrInfo } from 'react-icons/gr';
import {
  Box,
  FormControl, FormLabel, Alert, Text, SimpleGrid, Icon, Select,
} from '@chakra-ui/react';
import { LeafletMouseEvent } from 'leaflet';
import swal from 'sweetalert';
import { Map as MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useHistory } from 'react-router-dom';
import Input from '../../../components/Input/';
import mapIcon from '../../../utils/';
import api from '../../../api/';
import * as ROUTES from '../../../constants/routes';
import Button from '../ButtonSend/';
const ContactForm: React.FC = () => {
  const history = useHistory();
  const [position, setPosition] = React.useState({ latitude: 0, longitude: 0 });
  const [about, setAbout] = React.useState('');
  const [whatsapp, setWhatsapp] = React.useState('');
  const [namePoint, setNamePoint] = React.useState('');
  const [responsibleName, setResponsible] = React.useState('');
  const [typePoint, setTypePoint] = React.useState('');
  const [loading, setLoading] = React.useState<boolean>(false);
  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;
    setPosition({ latitude: lat, longitude: lng });
  };
  const [userPosition, setUserPosition] = React.useState({
    latitude: 0,
    longitude: 0,
  });

  navigator.geolocation.getCurrentPosition((position) => {
    setUserPosition({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  });
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const { latitude, longitude } = position;
    const data = {
      namePoint,
      latitude,
      longitude,
      about,
      whatsapp,
      responsibleName,
      typePoint,
    };
    if (latitude === 0 && longitude === 0) {
      swal("Calma lá", "Selecione um local no mapa :(", "error");
    } else {
      try {
        setLoading(true);
        await api.post('registionPoint/', data);
        swal("Cadastro Realizado!", "Deu certo (:", "success");
      } catch (error) {
        swal("Ops!", "Ocorreu algum erro com nossa api :(", "error");
      } finally {
        setLoading(false);
        setTimeout(() => {
          history.push(ROUTES.APPMAP);
        }, 4000);
      };
    }
  };

  return (
    <Box my={8} textAlign="left" onSubmit={handleSubmit} as="form">
      <MapContainer
        center={[userPosition.latitude, userPosition.longitude]}
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
      <SimpleGrid columns={[1, 1, 2]} spacing={2}>
        <FormControl id="nome" mt={1}>
          <FormLabel>Nome:</FormLabel>
          <Input
            type="text"
            placeholder="Insira o seu nome"
            name="responsible"
            iconLeft={<AiOutlineUserDelete />}
            onChange={(e) => setResponsible(e.target.value)}
          />
        </FormControl>
        <FormControl id="descricao" mt={1}>
          <FormLabel>Número para contato:</FormLabel>
          <Input
            type="text"
            name="whatsapp"
            placeholder="Número de contato"
            onChange={(e) => setWhatsapp(e.target.value)}
            iconLeft={<AiFillPhone />}
          />
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={[1, 1, 2]} spacing={2}>
        <FormControl id="pointName" mt={2}>
          <FormLabel>Nome do local:</FormLabel>
          <Input
            type="text"
            name="pointName"
            placeholder="Insira o seu ponto"
            iconLeft={<AiOutlineTeam />}
            onChange={(e) => setNamePoint(e.target.value)}
          />
        </FormControl>
        <FormControl id="typePoint" mt={2}>
          <FormLabel>É um ponto de vacinação?</FormLabel>
          <Select placeholder="Selecione uma opção" required onChange={(e) => setTypePoint(e.target.value)}>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </Select>
        </FormControl>
      </SimpleGrid>
      <FormControl id="descricao" mt={2}>
        <FormLabel>Descrição:</FormLabel>
        <Input
          type="text"
          name="about"
          placeholder="Insira a sua descrição"
          iconLeft={<AiFillFileText />}
          onChange={(e) => setAbout(e.target.value)}
        />
      </FormControl>
      <Button loading={loading} />
    </Box>
  );
};

export default ContactForm;

const AlertPoint = () => {
  return (
    <Alert status="info" mt={4} borderRadius={2}>
      <Icon as={GrInfo} />
      <Text paddingLeft={2} color="primary.200" fontWeight="bold">Escolhar um local no mapa</Text>
    </Alert>
  );
};
