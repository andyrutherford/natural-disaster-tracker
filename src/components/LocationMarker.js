import styled from 'styled-components';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const LocationMarkerWrapper = styled.div`
  font-size: 2rem;
  color: firebrick;
`;

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <LocationMarkerWrapper onClick={onClick}>
      <Icon icon={locationIcon} className='location-icon' />
    </LocationMarkerWrapper>
  );
};

export default LocationMarker;
