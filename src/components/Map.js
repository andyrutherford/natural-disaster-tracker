import { useState } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

// Components
import LocationCard from './LocationCard';
import Marker from './markers/Marker';

const MapWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const eventTypes = ['wildfires', 'severeStorms', 'volcanoes', 'seaLakeIce'];

  const markers = eventData.map((e) => {
    if (
      eventTypes.includes(e.categories[0].id) &&
      e.geometry[0].type === 'Point'
    ) {
      return (
        <Marker
          type={eventTypes.find((i) => i === e.categories[0].id)}
          key={e.id}
          lat={e.geometry[0].coordinates[1]}
          lng={e.geometry[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: e.id,
              title: e.title,
              type: e.type,
              sources: e.sources,
            })
          }
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
