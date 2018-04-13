import React from 'react';

const Parcel = (props) => {
  return (
    <div className='container'>
      <form>
        <div className='row'>
          <label className='col-4'>Length</label>
          <input
            className='col-8'
            name='length'
            placeholder='eg. 20.2'
            onChange={props.handleParcelInputChange}
          />
        </div>
        <div className='row'>
          <label className='col-4'>Width</label>
          <input
            className='col-8'
            name='width'
            placeholder='eg. 10.9'
            onChange={props.handleParcelInputChange}
          />
        </div>
        <div className='row'>
          <label className='col-4'>Height</label>
          <input
            className='col-8'
            name='height'
            placeholder='eg. 5.0'
            onChange={props.handleParcelInputChange}
          />
        </div>
        <div className='row'>
          <label className='col-4'>Weight</label>
          <input
            className='col-8'
            name='weight'
            placeholder='eg. 65.9'
            onChange={props.handleParcelInputChange}
          />
        </div>
      </form>
    </div>
  )
};

export default Parcel;