import styled from 'styled-components';

import loader from '../assets/loader.gif';

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  img {
    width: 200px;
  }
  h1 {
    margin-top: -100px;
  }
`;

const Loader: React.FC = () => {
  return (
    <LoaderWrapper>
      <img src={loader} alt='Loading' />
      <h2>Fetching Data</h2>
    </LoaderWrapper>
  );
};

export default Loader;
