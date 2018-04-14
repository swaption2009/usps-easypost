import React, { Component } from 'react';
import Address from './shared/Address';
import Parcel from './shared/Parcel';
import Label from './shared/Label';
import { axiosClient } from '../helpers/API';

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
    },
    showLabel: false,
    labelUrl: '',
  };

  generateLabel = () => {
    axiosClient.post(`/shipments.json`, {
      shipment: {
        "fromCompany": this.state.fromAddress[0].company,
        "fromPhone": this.state.fromAddress[0].phone,
        "fromStreet1": this.state.fromAddress[0].street1,
        "fromStreet2": this.state.fromAddress[0].street2,
        "fromCity": this.state.fromAddress[0].city,
        "fromState": this.state.fromAddress[0].state,
        "fromZip": this.state.fromAddress[0].zip,
        "fromCountry": this.state.fromAddress[0].country,
        "toCompany": this.state.toAddress[0].company,
        "toPhone": this.state.toAddress[0].phone,
        "toStreet1": this.state.toAddress[0].street1,
        "toStreet2": this.state.toAddress[0].street2,
        "toCity": this.state.toAddress[0].city,
        "toState": this.state.toAddress[0].state,
        "toZip": this.state.toAddress[0].zip,
        "toCountry": this.state.toAddress[0].country,
        "length": this.state.parcel.length,
        "width": this.state.parcel.width,
        "height": this.state.parcel.height,
        "weight": this.state.parcel.weight
      }
    })
      .then(res => this.setState({
        showLabel: true,
        labelUrl: res.data,
      })
    )
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
        <button className='btn btn-primary'
                onClick={this.generateLabel}>
          Generate USPS Label
        </button>
        <br />
        <br />
        { this.state.showLabel ? <Label labelUrl={this.state.labelUrl} /> : null }
      </div>
    );
  }
}

export default App;
