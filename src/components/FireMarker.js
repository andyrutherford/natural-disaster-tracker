import styled from 'styled-components';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire';

const FireMarkerWrapper = styled.div`
  font-size: 2rem;
  color: firebrick;
`;

const FireMarker = ({ lat, lng, onClick }) => {
  return (
    <FireMarkerWrapper onClick={onClick}>
      <Icon icon={locationIcon} />
    </FireMarkerWrapper>
  );
};

export default FireMarker;
