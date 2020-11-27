import styled from 'styled-components';

const LocationCardWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  width: 400px;
  min-height: 200px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  font-size: 18px;
  color: #fff;
  font-weight: 200;
  transform: scale(0.75) translateX(-20%) translateY(25%);

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    padding: 5px 0;
  }

  @media (min-width: 768px) {
    top: 80px;
    left: initial;
    bottom: initial;
    right: 60px;
    transform: scale(1);
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
