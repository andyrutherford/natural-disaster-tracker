const FETCH_ENDPOINT = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events';

export const fetchData = async () => {
  try {
    const res = await fetch(FETCH_ENDPOINT);
    const json = await res.json();
    return json;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
