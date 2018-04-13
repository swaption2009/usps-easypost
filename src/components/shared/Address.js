import React from 'react';

const Address = (props) => {
  return (
    <div className='container'>
      <form onSubmit={props.handleAddressSubmit}>
        <div className='row'>
          <label className='col-4'>Company</label>
          <input
            className='col-8'
            name='company'
            placeholder='eg. EasyPost'
            onChange={props.handleAddressInputChange}
          />
        </div>
        <div className='row'>
          <label className='col-4'>Phone</label>
          <input
            className='col-8'
            name='phone'
            placeholder='eg. 4151234567'
            onChange={props.handleAddressInputChange}
          />
        </div>
        <div className='row'>
          <label className='col-4'>Street 1</label>
          <input
            className='col-8'
            name='street1'
            placeholder='eg. 417 Montgomery St'
            onChange={props.handleAddressInputChange}
          />
        </div>
        <div className='row'>
          <label className='col-4'>Street 2</label>
          <input
            className='col-8'
            name='street2'
            placeholder='eg. Floor 5'
            onChange={props.handleAddressInputChange}
          />
        </div>
        <div className='row'>
          <label className='col-4'>City</label>
          <input
            className='col-8'
            name='city'
            placeholder='eg. San Francisco'
            onChange={props.handleAddressInputChange}
          />
        </div>
        <div className='row'>
          <label className='col-4'>State</label>
          <input
            className='col-8'
            name='state'
            placeholder='eg. CA'
            onChange={props.handleAddressInputChange}
          />
        </div>
        <div className='row'>
          <label className='col-4'>Zip</label>
          <input
            className='col-8'
            name='zip'
            placeholder='eg. 94104'
            onChange={props.handleAddressInputChange}
          />
        </div>
        <div className='row'>
          <label className='col-4'>Country</label>
          <input
            className='col-8'
            name='country'
            placeholder='eg. US'
            onChange={props.handleAddressInputChange}
          />
        </div>
        <input className='btn btn-outline-primary'
               type='submit'
               value='Save Address' />
      </form>
    </div>
  )
};

export default Address;