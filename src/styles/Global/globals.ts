import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-size: 16px;
  height: 100%;
  overflow-x: hidden;
  color: #fff;
}
a {
  color: inherit;
  text-decoration: none;
}
body::-webkit-scrollbar {
  width: 8px;
}
body::-webkit-scrollbar-track {
  background: black;
}
body::-webkit-scrollbar-thumb {
  background: #454545;
  border-radius: 3px;
}
body::-webkit-scrollbar-thumb:hover {
  background: grey;
}
#id1,
#id2 {
  margin: 0 auto;
  width: 394px!important
}
.chakra-accordion {
  div:last-child {
    border-bottom-width: 0 !important;
  }
}
*:focus{
  box-shadow: none !important;
  text-decoration: none !important;
}
.leaflet-container {
  z-index: 5;
}
.create-vaccination-point {
  position: fixed;
  right: 40px;
  bottom: 50px;
  z-index: 10;

  width: 64px;
  height: 64px;
  background: #15c3d6;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.3s;
}

.create-vaccination-point:hover {
  background: #17d6eb;
}

.map-popup .leaflet-popup-content-wrapper {
  background-color: #000;
  border-radius: 20px;
  box-shadow: none;
}

.map-popup .leaflet-popup-content {
  align-items: center;
  color: #0089a5;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  justify-content: space-between;
  margin: 8px 12px;
}
.map-popup .leaflet-popup-tip-container {
  display: none;
}
.leaflet-popup-content p{
  margin: 2px;
}
`;
