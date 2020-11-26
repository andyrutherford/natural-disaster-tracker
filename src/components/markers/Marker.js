import styled, { css } from 'styled-components';

import { Icon } from '@iconify/react';

import fireIcon from '@iconify/icons-mdi/fire';
import iceIcon from '@iconify/icons-wi/snowflake-cold';
import stormIcon from '@iconify/icons-mdi/weather-hurricane';
import volcanoIcon from '@iconify/icons-wi/volcano';

export const MarkerWrapper = styled.div`
  :hover {
    cursor: pointer;
    /* transform: scale(1.05); */
  }

  display: block;
  font-size: 2rem;

  border-radius: 50%;
  ${(props) => {
    if (props.type === 'wildfires') {
      return css`
        color: firebrick;
      `;
    }
    if (props.type === 'seaLakeIce') {
      return css`
        color: darkblue;
      `;
    }
    if (props.type === 'severeStorms') {
      return css`
        font-size: 3rem;
        color: #000;
      `;
    }
    if (props.type === 'volcano') {
      return css`
        color: #000;
      `;
    }
  }};
`;

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
    {/* <div
      style={{
        height: '1em',
        width: '1em',
        backgroundColor: 'red',
        borderRadius: '50%',
      }}
    /> */}
  </MarkerWrapper>
);

export default Marker;
