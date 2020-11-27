import { useState } from 'react';

import styled from 'styled-components';

const FiltersWrapper = styled.div`
  position: absolute;
  top: 80px;
  left: 30px;
  width: 200px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  color: #fff;
  padding: 0.5em;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header p {
    cursor: pointer;
  }
`;

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
