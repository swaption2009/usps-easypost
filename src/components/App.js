import React, { Component } from 'react';
import Address from './shared/Address';
import Parcel from './shared/Parcel';

class App extends Component {
  state = {
    address: {
      company: '',
      phone: '',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: '',
      country: '',
    },
    toAddress: [],
    fromAddress: [],
    parcel: {
      length: '',
      width: '',
      height: '',
      weight: '',
    }
  };

  handleParcelInputChange = (evt) => {
    const parcel = this.state.parcel;
    parcel[evt.target.name] = evt.target.value;
    this.setState({ parcel });
  };

  handleAddressInputChange = (evt) => {
    const address = this.state.address;
    address[evt.target.name] = evt.target.value;
    this.setState({ address });
  };

  saveFromAddress = (evt) => {
    evt.preventDefault();
    const fromAddress = [
      ...this.state.fromAddress,
      this.state.address,
    ];
    this.setState({
      fromAddress,
      address: {
        company: '',
        phone: '',
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: '',
        country: '',
      },
    });
  };

  saveToAddress = (evt) => {
    evt.preventDefault();
    const toAddress = [
      ...this.state.toAddress,
      this.state.address,
    ];
    this.setState({
      toAddress,
      address: {
        company: '',
        phone: '',
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: '',
        country: '',
      },
    });
  };

  render() {
    return (
      <div className="container">
        <br />
        <h1>USPS EasyPost</h1>
        <hr />
        <div className='row'>
          <div className='col-6'>
            <h3>From Address</h3>
            <div className='row'>
              <Address handleAddressInputChange={this.handleAddressInputChange}
                       handleAddressSubmit={this.saveFromAddress} />
            </div>
          </div>
          <div className='col-6'>
            <h3>To Address</h3>
            <div className='row'>
              <Address handleAddressInputChange={this.handleAddressInputChange}
                       handleAddressSubmit={this.saveToAddress} />
            </div>
          </div>
        </div>
        <hr />
        <div className='row'>
          <h3 className='col-4'>Parcel Information</h3>
          <div className='col-8'>
            <Parcel handleParcelInputChange={this.handleParcelInputChange} />
          </div>
        </div>
        <hr />
        <button className='btn btn-primary'>
          Generate USPS Label
        </button>
      </div>
    );
  }
}

export default App;
