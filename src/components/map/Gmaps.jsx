import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        console.log(this.props.pins)
        return (
            <Map
                google={this.props.google}
                zoom={8}
                initialCenter={{
                    lat: 37.554885,
                    lng: 127.081807
                }}
            >
                {
                    this.props.pins.map((pin, i) => (
                        <Marker
                            title={'The marker`s title will appear as a tooltip.'}
                            name={'SOMA'}
                            position={{ lat: pin.latitude, lng: pin.longitude }} />
                    ))
                }
                <InfoWindow onClose={this.onInfoWindowClose}>

                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)