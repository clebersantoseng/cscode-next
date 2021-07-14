import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '300px',
  position: 'relative'
};

const containerStyle = {
  width: '100%',
  height: '300px',
  position: 'relative'
};

export class Maps extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={containerStyle}
        containerStyle={mapStyles}
        initialCenter={
          {
            lat: -16.7457657,
            lng: -48.5166911
          }
        }
      >
        <Marker 
          name={'CsCODE | Sua escolha inteligente.'}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBMgDxjoFXq9QpzPRfI093tn5_dknnxDS8'
})(Maps);