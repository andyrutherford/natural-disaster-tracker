// Assets
import { Icon } from '@iconify/react';
import lightningBolt from '@iconify/icons-mdi/lightning-bolt';
import { ReactComponent as GithubIcon } from '../assets/github.svg';

// Styles
import { HeaderWrapper } from './Header.styles';

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
