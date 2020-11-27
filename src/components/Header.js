import styled from 'styled-components';
import { Icon } from '@iconify/react';
import lightningBolt from '@iconify/icons-mdi/lightning-bolt';
import { ReactComponent as GithubIcon } from '../assets/github.svg';

const HeaderWrapper = styled.header`
  padding: 10px 18px;
  background-color: #151e3d;
  color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 25px;
    padding: 0;
    margin: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 200;
  }

  svg {
    fill: #fff;
  }

  .header-left,
  .header-right {
    width: 30px;
  }

  a {
    display: flex;
    align-items: center;
  }

  div:first-child {
    visibility: hidden;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div className='header-left'></div>
      <div className='header-center'>
        <h1>
          <Icon icon={lightningBolt} /> Natural Disaster Tracker
        </h1>
      </div>
      <div className='header-right'>
        <a
          href='https://github.com/andyrutherford/natural-disaster-tracker'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GithubIcon />
        </a>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
