import styled from 'styled-components';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/weather-hurricane';

const SevereStormMarkerWrapper = styled.div`
  font-size: 3rem;
  color: #000;
`;

const SevereStormMarker = ({ lat, lng, onClick }) => {
  return (
    <SevereStormMarkerWrapper onClick={onClick}>
      <Icon icon={locationIcon} />
    </SevereStormMarkerWrapper>
  );
};

export default SevereStormMarker;
