import styled from 'styled-components'

export const PageMap = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 10;
    position: relative;
    display: flex;
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

 .map-popup .leaflet-popup-content a {
	align-items: center;
	background-color: #15c3d6;
	border-radius: 12px;
	box-shadow: 17px 27px 41px #178ea633;
	display: flex;
	height: 40px;
	justify-content: center;
	width: 40px;
}

 .map-popup .leaflet-popup-tip-container {
	display: none;
}
`