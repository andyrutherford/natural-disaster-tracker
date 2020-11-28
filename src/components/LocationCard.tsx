// Styles
import { LocationCardWrapper } from './LocationCard.styles';

type Info = {
  title: string;
  id: string;
  sources: {
    id: string;
    url: string;
  }[];
};

type Props = {
  info: Info;
};

const LocationCard: React.FC<Props> = ({ info }) => {
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
