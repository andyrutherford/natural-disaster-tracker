const EVENTS_URL = 'https://eonet.sci.gsfc.nasa.gov/api/v3/events';

export const fetchEvents = async () => {
  const response = await fetch(EVENTS_URL);
  return response.json();
};
