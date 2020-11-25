import { useState } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

// Components
import LocationCard from './LocationCard';
import FireMarker from './FireMarker';
import IceMarker from './IceMarker';
import SevereStormMarker from './SevereStormMarker';
import VolcanoMarker from './VolcanoMarker';

const MapWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((e) => {
    if (e.categories[0].id === 'wildfires') {
      return (
        <FireMarker
          key={e.id}
          lat={e.geometry[0].coordinates[1]}
          lng={e.geometry[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: e.id, title: e.title })}
        />
      );
    }
    if (e.categories[0].id === 'severeStorms') {
      return (
        <SevereStormMarker
          key={e.id}
          lat={e.geometry[0].coordinates[1]}
          lng={e.geometry[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: e.id, title: e.title })}
        />
      );
    }
    if (e.categories[0].id === 'volcanoes' && e.geometry[0].type === 'Point') {
      return (
        <VolcanoMarker
          key={e.id}
          lat={e.geometry[0].coordinates[1]}
          lng={e.geometry[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: e.id, title: e.title })}
        />
      );
    }
    if (e.categories[0].id === 'seaLakeIce') {
      return (
        <IceMarker
          key={e.id}
          lat={e.geometry[0].coordinates[1]}
          lng={e.geometry[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: e.id, title: e.title })}
        />
      );
    }
    return null;
  });
  return (
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationCard info={locationInfo} />}
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
