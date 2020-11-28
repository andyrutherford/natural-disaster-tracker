import { Icon } from '@iconify/react';

import fireIcon from '@iconify/icons-mdi/fire';
import iceIcon from '@iconify/icons-wi/snowflake-cold';
import stormIcon from '@iconify/icons-mdi/weather-hurricane';
import volcanoIcon from '@iconify/icons-wi/volcano';

// Styles
import { MarkerWrapper } from './Marker.styles';

const eventIcons = {
  wildfires: fireIcon,
  severeStorms: stormIcon,
  seaLakeIce: iceIcon,
  volcanoes: volcanoIcon,
};

const Marker = ({ ...props }) => (
  <MarkerWrapper
    className='eventMarker'
    type={props.type}
    onClick={props.onClick}
  >
    <Icon className='eventIcon' icon={eventIcons[props.type]} />
  </MarkerWrapper>
);

export default Marker;
