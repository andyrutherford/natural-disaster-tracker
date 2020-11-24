import styled from 'styled-components';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const HeaderWrapper = styled.header`
  padding: 10px;
  background-color: #333;
  color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;

  h1 {
    font-size: 25px;
    padding: 0;
    margin: 0;
    text-align: center;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>
        <Icon icon={locationIcon} /> Natural Disaster Tracker
      </h1>
    </HeaderWrapper>
  );
};

export default Header;
