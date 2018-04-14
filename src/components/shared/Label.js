import React from 'react';

const Label = (props) => {
  return (
    <div className='container'>
      <img src={`${props.labelUrl}`}
           className='col-12'
           alt="usps_shipping_label" />
    </div>
  )
};

export default Label;