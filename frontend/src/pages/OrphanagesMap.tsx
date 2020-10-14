import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus,FiArrowRight} from 'react-icons/fi'
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer , Marker, Popup} from 'react-leaflet';
import LeafLet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css';

const mapIcon = LeafLet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58,68],
    iconAnchor : [29, 68],
    popupAnchor:[170,2]
})

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Rio de Janeiro</strong>
                    <span>-RJ</span>
                </footer>
            </aside>

            <Map 
            center={[-22.9311479,-43.3584274]}
            zoom={15}
            style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>

                <Marker
                    icon = {mapIcon}
                    position={[-22.9311479,-43.3584274]}
                >
                    <Popup closeButton={false} minWidth={240} className="map-popup">
                Lar das meninas
                <Link to="/orphanages/create">
                    <FiArrowRight size={20} color="#FFF" />
                </Link>
            </Popup>
                </Marker>
            </Map>
            

            <Link to="/orphanages/1" className="create-orphanage">
                <FiPlus size={32} color ="#FFF" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;