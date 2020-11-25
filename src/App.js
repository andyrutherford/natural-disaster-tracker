import { useQuery } from 'react-query';

// Components
import Header from './components/Header';
import Map from './components/Map';
import Loader from './components/Loader';

// Utils
import { fetchEvents } from './utils/api';

const App = () => {
  const { data, error, isLoading, isError } = useQuery('events', fetchEvents);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h1>{error} </h1>;
  }

  return (
    <div className='App'>
      <Header />
      {data && <Map eventData={data.events} />}
    </div>
  );
};

export default App;
