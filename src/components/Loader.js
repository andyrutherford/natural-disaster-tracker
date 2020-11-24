import styled from 'styled-components';

import loader from '../assets/loader.gif';

const LoaderWrapper = styled.div``;

const Loader = () => {
  return (
    <LoaderWrapper>
      <img src={loader} alt='Loading' />
      <h1>Fetching Data</h1>
    </LoaderWrapper>
  );
};

export default Loader;
