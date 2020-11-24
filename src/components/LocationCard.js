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
      <h2>Event Location Info</h2>
      <ul>
        <li>
          ID: <strong>{info.id} </strong>
        </li>
        <li>
          Title: <strong>{info.title}</strong>
        </li>
      </ul>
    </LocationCardWrapper>
  );
};

export default LocationCard;
