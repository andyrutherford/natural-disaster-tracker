import { useState, useEffect } from 'react';

// Components
import Header from './components/Header';
import Map from './components/Map';
import Loader from './components/Loader';

// Utils
import { fetchData } from './utils/fetchData';

const App = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const { events } = await fetchData();
      setEventData(events);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  return (
    <div className='App'>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
};

export default App;
