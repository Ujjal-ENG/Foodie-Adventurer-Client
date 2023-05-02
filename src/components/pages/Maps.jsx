/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */

import React from 'react';

import 'leaflet/dist/leaflet.css';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

function Maps() {
    const position = [51.505, -0.09];

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
            <TileLayer url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}@2x.png?key=GKLMjlSfc4ZAKinDs13b" />
            <Marker position={position}>
                <Popup>The Foodie Adventurer</Popup>
            </Marker>
        </MapContainer>
    );
}
export default Maps;
