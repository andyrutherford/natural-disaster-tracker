import { useState } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

// Components
import LocationCard from './LocationCard';
import Marker from './markers/Marker';
import Filters from './Filters';

const MapWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Map = ({ eventData, center, zoom }) => {
  const eventTypes = ['wildfires', 'severeStorms', 'volcanoes', 'seaLakeIce'];
  const [locationInfo, setLocationInfo] = useState(null);
  const [filteredEventTypes, setFilteredEventTypes] = useState([...eventTypes]);

  const markers = eventData.map((event) => {
    if (
      filteredEventTypes.includes(event.categories[0].id) &&
      event.geometry[0].type === 'Point'
    ) {
      return (
        <Marker
          type={eventTypes.find((i) => i === event.categories[0].id)}
          key={event.id}
          lat={event.geometry[0].coordinates[1]}
          lng={event.geometry[0].coordinates[0]}
          onClick={(e) => {
            // console.log(e.target, e.currentTarget);
            // console.log(event.id, event.title, event.type, event.sources);
            setLocationInfo({
              id: event.id,
              title: event.title,
              type: event.type,
              sources: event.sources,
            });
          }}
        />
      );
    }
    return null;
  });

  const filterHandler = (eventType, val) => {
    if (val) {
      setFilteredEventTypes([...filteredEventTypes, eventType]);
    } else {
      setFilteredEventTypes(
        filteredEventTypes.filter((event) => event !== eventType)
      );
    }
  };

  return (
    <MapWrapper>
      <Filters filterHandler={filterHandler} />
      <GoogleMapReact
        className='eventMap'
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        // onClick={(e) => setLocationInfo(null)}
        onClick={(e) => {
          e.event.target.parentElement &&
            !e.event.target.parentElement.classList.length > 0 &&
            setLocationInfo(null);
        }}
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
