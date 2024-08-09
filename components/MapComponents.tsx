// components/MapComponent.js
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix the default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapComponent = () => {
    useEffect(() => {
        // Fix SSR issue by ensuring window object exists
        if (typeof window !== 'undefined') {
            require('leaflet/dist/leaflet.css');
        }
    }, []);

    // Define the coordinates for the polygon (Passo, Minahasa area)
    const passoMinahasaCoordinates: L.LatLngTuple[] = [
        [1.200713, 124.841048],
        [1.209950, 124.834981], // Adjust these coordinates to outline your specific area
        [1.215153, 124.858396],
        [1.204708, 124.857058],
        [1.196409, 124.868505],
        [1.193768, 124.859334]
    ];

    return (
        <MapContainer center={[1.2211, 124.8550]} zoom={13} style={{ height: '50vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Polygon positions={passoMinahasaCoordinates}>
                <Popup>
                    Passo, Minahasa Area
                </Popup>
            </Polygon>
        </MapContainer>
    );
};

export default MapComponent;
