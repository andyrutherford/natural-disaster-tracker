import styled from 'styled-components';

export const HeaderWrapper = styled.header`
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
    font-size: 18px;
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
    transform: scale(0.75);
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

  @media (min-width: 768px) {
    h1 {
      font-size: 25px;
    }

    svg {
      transform: scale(1);
    }
  }
`;
