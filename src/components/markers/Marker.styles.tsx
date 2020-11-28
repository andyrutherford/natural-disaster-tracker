import styled, { css } from 'styled-components';

type MarkerWrapperProps = {
  type?: string,
};

export const MarkerWrapper =
  styled.div <
  MarkerWrapperProps >
  `
  :hover {
    cursor: pointer;
  }

  display: block;
  font-size: 2rem;

  border-radius: 50%;
  ${(props) => {
    if (props.type === 'wildfires') {
      return css`
        color: #d31404;
      `;
    }
    if (props.type === 'seaLakeIce') {
      return css`
        color: #52b2bf;
      `;
    }
    if (props.type === 'severeStorms') {
      return css`
        font-size: 3rem;
        color: #281e5d;
      `;
    }
    if (props.type === 'volcanoes') {
      return css`
        color: #7a3803;
      `;
    }
  }};
`;
