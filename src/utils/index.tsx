import Leaflet from 'leaflet';
import mapMarker from '../image/svg/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarker,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -70],
});

export default mapIcon;