import styled, { css } from 'styled-components';

import { Icon } from '@iconify/react';

import fireIcon from '@iconify/icons-mdi/fire';
import iceIcon from '@iconify/icons-wi/snowflake-cold';
import stormIcon from '@iconify/icons-mdi/weather-hurricane';
import volcanoIcon from '@iconify/icons-wi/volcano';

export const MarkerWrapper = styled.div`
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  font-size: 2rem;

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
  <MarkerWrapper type={props.type}>
    <Icon icon={eventIcons[props.type]} onClick={props.onClick} />
  </MarkerWrapper>
);

export default Marker;
