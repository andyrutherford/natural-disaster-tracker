import styled from 'styled-components';
import { Icon } from '@iconify/react';
import volcanoIcon from '@iconify/icons-wi/snowflake-cold';

const IceMarkerWrapper = styled.div`
  font-size: 2rem;
  color: darkblue;
`;

const IceMarker = ({ lat, lng, onClick }) => {
  return (
    <IceMarkerWrapper onClick={onClick}>
      <Icon icon={volcanoIcon} />
    </IceMarkerWrapper>
  );
};

export default IceMarker;
