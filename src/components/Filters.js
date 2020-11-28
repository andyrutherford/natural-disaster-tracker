import { useState } from 'react';

// Styles
import { FiltersWrapper } from './Filters.styles';

const Filters = ({ filterHandler, closeHandler, options }) => {
  const [filter, setFilter] = useState({
    wildfires: options.includes('wildfires'),
    volcanoes: options.includes('volcanoes'),
    severeStorms: options.includes('severeStorms'),
    seaLakeIce: options.includes('seaLakeIce'),
  });

  const onChange = (e) => {
    filterHandler(e.target.id, e.target.checked);
    setFilter({ ...filter, [e.target.id]: e.target.checked });
  };

  return (
    <FiltersWrapper>
      <div className='header'>
        <h2>Filters</h2>
        <p onClick={closeHandler}>Close</p>
      </div>
      <div className='form-control'>
        <label htmlFor='wildfires'>
          <input
            type='checkbox'
            id='wildfires'
            checked={filter.wildfires}
            onChange={onChange}
          />
          Wildfires
        </label>
      </div>

      <div className='form-control'>
        <label htmlFor='volcanoes'>
          <input
            type='checkbox'
            id='volcanoes'
            checked={filter.volcanoes}
            onChange={onChange}
          />
          Volcanoes
        </label>
      </div>
      <div className='form-control'>
        <label htmlFor='severeStorms'>
          <input
            type='checkbox'
            id='severeStorms'
            checked={filter.severeStorms}
            onChange={onChange}
          />
          Severe Storms
        </label>
      </div>
      <div className='form-control'>
        <label htmlFor='seaLakeIce'>
          <input
            type='checkbox'
            id='seaLakeIce'
            checked={filter.seaLakeIce}
            onChange={onChange}
          />
          Ice Bergs
        </label>
      </div>
    </FiltersWrapper>
  );
};

export default Filters;
