import React from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

export class GoogleMaps extends React.Component {
    render() {
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={8}
              defaultCenter={{ lat: 36, lng: 127 }}
            >
                {
                    this.props.pins.map((pin, i) => (
                        <Marker
                            title={'The marker`s title will appear as a tooltip.'}
                            name={'SOMA'}
                            position={{ lat: pin.latitude, lng: pin.longitude }} />
                    ))
                }
            </GoogleMap>
          ));

        return (
<MapWithAMarker
  googleMapURL= {process.env.REACT_APP_GOOGLE_MAP_URL}
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
        );
    }
}

export default GoogleMaps;
