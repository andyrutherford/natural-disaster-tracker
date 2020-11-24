import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

import LocationMarker from './LocationMarker';

const MapWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Map = ({ center, zoom }) => {
  return (
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </MapWrapper>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
