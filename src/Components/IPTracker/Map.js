import React from "react";
import styled from "styled-components";

import { MapContainer, TileLayer, Marker, } from 'react-leaflet';

const MapContainerDiv = styled(MapContainer)`
    overflow: hidden;
    height:500px;
    width:100%;
    z-index: 1;
    margin-top: 69px;

    @media (max-width: 700px){
        margin-top: 89px;
        height:100vh;
    }
`

function Map(props) {
    let position = [props.location.location.lat, props.location.location.lng];
   return(
    <>
        <MapContainerDiv center={position} zoom={14} scrollWheelZoom={true} watch={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=VTQcTvCqnZ3XsnVPjI0f"
                />
            <Marker position={position}>
            </Marker>
        </MapContainerDiv>
    </>
   )
}

export default Map;