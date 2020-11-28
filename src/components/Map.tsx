import { useState } from 'react';
import GoogleMapReact from 'google-map-react';

// Components
import LocationCard from './LocationCard';
import Marker from './markers/Marker';
import Filters from './Filters';

// Styles
import { MapWrapper } from './Map.styles';
import { FilterLabel } from './FilterLabel.styles';

type LocationInfoState = {
  id: string;
  title: string;
  type: string;
  sources: {
    id: string;
    url: string;
  }[];
};

let googleMapsApiKey: string = process.env.REACT_APP_GOOGLE_MAPS_API_KEY!;

type EventDataItem = {
  categories: { id: string; title: string }[];
  closed?: boolean;
  description?: string;
  geometry: {
    coordinates: [number, number];
    date: string;
    magnitudeUnit?: string;
    magnitudeValue?: string;
    type?: string;
  }[];
  id: string;
  link: string;
  sources: { id: string; url: string }[];
  title: string;
};

type MapProps = {
  eventData: EventDataItem[];
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
};

const Map: React.FC<MapProps> = ({
  eventData,
  center = { lat: 42.3265, lng: -122.8756 },
  zoom = 1,
}) => {
  const eventTypes: string[] = [
    'wildfires',
    'severeStorms',
    'volcanoes',
    'seaLakeIce',
  ];
  const [locationInfo, setLocationInfo] = useState<LocationInfoState | null>(
    null
  );
  const [showFilters, setShowFilters] = useState(false);
  const [filteredEventTypes, setFilteredEventTypes] = useState<string[]>([
    ...eventTypes,
  ]);

  const markers = eventData.map((event) => {
    if (
      filteredEventTypes.includes(event.categories[0].id) &&
      event.geometry[0].type === 'Point'
    ) {
      return (
        <Marker
          eventType={
            eventTypes.find((i) => i === event.categories[0].id) || 'unknown'
          }
          key={event.id}
          lat={event.geometry[0].coordinates[1]}
          lng={event.geometry[0].coordinates[0]}
          onClick={() => {
            setLocationInfo({
              id: event.id,
              title: event.title,
              type: event.categories[0].title,
              sources: event.sources,
            });
          }}
        />
      );
    }
    return null;
  });

  const filterHandler = (eventType: string, val: boolean) => {
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
      {showFilters ? (
        <Filters
          options={filteredEventTypes}
          filterHandler={filterHandler}
          closeHandler={() => setShowFilters(false)}
        />
      ) : (
        <FilterLabel onClick={() => setShowFilters((state) => !state)}>
          Filters
        </FilterLabel>
      )}
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleMapsApiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
        // onClick={(e) => setLocationInfo(null)}
        onClick={(e) => {
          e.event.target.parentElement &&
            !(e.event.target.parentElement.classList.length > 0) &&
            setLocationInfo(null);
        }}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationCard info={locationInfo} />}
    </MapWrapper>
  );
};

export default Map;
