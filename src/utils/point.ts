import Leaflet from 'leaflet';
import vaccinationPoint from '../image/svg/vaccination-point.svg';

const mapIconvaccination = Leaflet.icon({
  iconUrl: vaccinationPoint,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -70],
});

export default mapIconvaccination;