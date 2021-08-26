import "./map.css"
import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Room } from "@material-ui/icons"


function Map({ pins }) {
    useEffect(() => {
        console.log(pins)
    })
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: 37.32,
        longitude: 127.08,
        zoom: 8
    });

    return (
        <div className="mapContainer">
        <div className="map">
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
                onViewportChange={nextViewport => setViewport(nextViewport)}
                mapStyle="mapbox://styles/jaehyunjeung/cksrker54r95317p6sdb4wss5"
            >
                {
                    pins.map((pin, i) => (
                        <Marker key={pin.youtubeLink} longitude={pin.longitude} latitude={pin.latitude} >
                            <Room style={{ fontSize: 3 * viewport.zoom, cursor: "pointer", 
                                color: pin.color
                            }}/>                        
                        </Marker>
                    ))
                }
            </ReactMapGL>
        </div>
        </div>
    );
}
export default Map;