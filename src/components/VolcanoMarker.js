import styled from 'styled-components';
import { Icon } from '@iconify/react';
import volcanoIcon from '@iconify/icons-wi/volcano';

const VolcanoMarkerWrapper = styled.div`
  font-size: 2rem;
  color: #000;
`;

const VolcanoMarker = ({ lat, lng, onClick }) => {
  return (
    <VolcanoMarkerWrapper onClick={onClick}>
      <Icon icon={volcanoIcon} />
    </VolcanoMarkerWrapper>
  );
};

export default VolcanoMarker;
