import styled from 'styled-components';

const LocationCardWrapper = styled.div`
  position: absolute;
  top: 80px;
  right: 50px;
  width: 400px;
  min-height: 200px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  font-size: 18px;
  color: #fff;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    padding: 5px 0;
  }
`;

const LocationCard = ({ info }) => {
  return (
    <LocationCardWrapper>
      <h2>{info.title} </h2>
      <ul>
        <li>
          ID: <strong>{info.id} </strong>
        </li>
        <li>
          Sources:
          <ul>
            {info.sources &&
              info.sources.map((i) => (
                <li key={i.id}>
                  [{i.id}]{' '}
                  <a href={i.url} target='_blank' rel='noreferrer noopener'>
                    {i.url.length > 40 ? i.url.slice(0, 30) + '...' : i.url}
                  </a>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </LocationCardWrapper>
  );
};

export default LocationCard;
