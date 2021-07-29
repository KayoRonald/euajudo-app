import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map as MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Helmet from 'react-helmet';

import mapIcon from '../../utils/';
import * as ROUTES from '../../constants/routes';
import { PageMap } from './styles';

function MapHelp() {
  const [state, setState] = React.useState({
    long: 0,
    lat: 0,
  });

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((posstion) => {
      setState({
        long: posstion.coords.longitude,
        lat: posstion.coords.latitude,
      });
    }, (error) => {
      swal("Ops!", "Precisamos da sua permissão para encontrar sua localização:(", "error");
    }, {
      enableHighAccuracy: true,
      timeout: 60000,
    });
  }, []);

  return (
    <PageMap>
      <Helmet>
        <title>Eu Ajudo | Pontos de vacinção</title>
      </Helmet>
      <MapContainer
        center={[state.lat, state.long]}
        zoom={15.7}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2F5b2t5bGVyIiwiYSI6ImNrcG55N3RnaDBrdnkydm13YTIwdDQ2MXAifQ.mPGFip4w4KhoZSqmUqoY2w'}
        />
        <Marker
          icon={mapIcon}
          position={[-6.4019317, -36.4511400]}
        >
          <Popup minWidth={240} maxHeight={240} className="map-popup" closeButton={false}>
            Ponto de Vacina
            <Link to="/">
              <FiArrowRight size={32} color="#FFF" />
            </Link>
          </Popup>
        </Marker>
      </MapContainer>

      <Link to={ROUTES.CREATEPOINT} className="create-vaccination-point">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </PageMap>
  );
}

export default MapHelp;