import { Icon } from '@iconify/react';

import fireIcon from '@iconify/icons-mdi/fire';
import iceIcon from '@iconify/icons-wi/snowflake-cold';
import stormIcon from '@iconify/icons-mdi/weather-hurricane';
import volcanoIcon from '@iconify/icons-wi/volcano';

// Styles
import { MarkerWrapper } from './Marker.styles';

const eventIcons: { [key: string]: any } = {
  wildfires: fireIcon,
  severeStorms: stormIcon,
  seaLakeIce: iceIcon,
  volcanoes: volcanoIcon,
};

type MarkerProps = {
  eventType: string;
  key: string;
  lat: number;
  lng: number;
  onClick: () => void;
};

const Marker: React.FC<MarkerProps> = ({
  eventType,
  key,
  lat,
  lng,
  onClick,
}) => (
  <MarkerWrapper className='eventMarker' type={eventType} onClick={onClick}>
    <Icon className='eventIcon' icon={eventIcons[eventType]} />
  </MarkerWrapper>
);

export default Marker;
