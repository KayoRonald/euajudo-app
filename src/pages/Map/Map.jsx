import React from 'react';
import Leaflet from 'leaflet';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map as MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { PageMap } from './styles';
import mapMarker from '../../image/svg/map-marker.svg';
import Helmet from 'react-helmet';
import * as ROUTES from '../../constants/routes'
const mapIcon = Leaflet.icon({
  iconUrl: mapMarker,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -70]
})

function MapHelp() {
  return (
    <PageMap>
      <Helmet>
        <title>Eu Ajudo | Pontos de vacinção</title>
      </Helmet>
      <MapContainer
        center={[-6.4019317, -36.4511400]}
        zoom={15.7}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2F5b2t5bGVyIiwiYSI6ImNrcG55N3RnaDBrdnkydm13YTIwdDQ2MXAifQ.mPGFip4w4KhoZSqmUqoY2w`}
        />
        <Marker
          icon={mapIcon}
          position={[-6.4019317, -36.4511400]}
        >
          <Popup minWidth={240} maxHeight={240} className="map-popup" closeButton={false}>
            Ponto de Vacina
            <Link to="">
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