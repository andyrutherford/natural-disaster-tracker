import styled from 'styled-components';

export const FiltersWrapper = styled.div`
  position: absolute;
  top: 80px;
  left: 30px;
  width: 200px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  color: #fff;
  padding: 0.5em;
  border-radius: 10px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header p {
    cursor: pointer;
  }

  label {
    display: flex;
    align-items: center;
  }
`;
