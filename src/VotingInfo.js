import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';
import Button from '@material-ui/core/Button';

const baseEndpoint = 'https://auck-elec.herokuapp.com';
const apiEndpoint = `${baseEndpoint}/api`;
const searchEndpoint = `${apiEndpoint}/search`;
const infoEndpoint = `${apiEndpoint}/info`;

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '45px',
    marginTop: '42px'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '21px'
  }
};

export class AddressSearcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAddress: null,
      votingInfo: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.promiseOptions = this.promiseOptions.bind(this);
    this.getVotingInfo = this.getVotingInfo.bind(this);
    this.searchAddress = this.searchAddress.bind(this);
    this.renderVotingInfo = this.renderVotingInfo.bind(this);
  }

  async getVotingInfo(addressId) {
    const headers = new Headers();

    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Content-Type', 'application/json');

    const requestInit = {
      headers,
      method: 'GET'
    };

    const request = new Request(
      `https://cors-anywhere.herokuapp.com/${infoEndpoint}/${addressId}`,
      requestInit
    );
    const response = await fetch(request);

    return response.json();
  }

  async searchAddress(searchText) {
    const headers = new Headers();

    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST');
    headers.append('Content-Type', 'application/json');

    const requestInit = {
      headers,
      method: 'POST',
      body: JSON.stringify({ searchText })
    };

    const request = new Request(
      `https://cors-anywhere.herokuapp.com/${searchEndpoint}`,
      requestInit
    );

    const response = await fetch(request);

    return response.json();
  }

  async promiseOptions(searchText) {
    const addresses = await this.searchAddress(searchText);

    return new Promise(resolve =>
      resolve(
        addresses.map(address => ({
          label: address.suggestion,
          value: address.id
        }))
      )
    );
  }

  async handleChange(value) {
    this.setState({ selectedAddress: value });
    if (value) {
      const votingInfo = await this.getVotingInfo(value.value);
      this.setState({
        votingInfo
      });
    }
  }

  renderVotingInfo() {
    return (
      <div style={styles.text}>
        <div>Your Ward is: {this.state.votingInfo.ward}</div>
        <div>Your Local Board is: {this.state.votingInfo.localBoard}</div>
        {this.state.votingInfo.subdivision &&
        this.state.votingInfo.subdivision !== 'Area Outside Subdivision' ? (
          <div>Your Subdivision is: {this.state.votingInfo.subdivision}</div>
        ) : null}
      </div>
    );
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <AsyncSelect
          cacheOptions
          defaultOptions
          isClearable
          placeholder="Search address e.g. 1 Queen St"
          components={{ DropdownIndicator: () => null }}
          noOptionsMessage={() => null}
          loadOptions={this.promiseOptions}
          onChange={this.handleChange}
        />
        {this.state.votingInfo ? this.renderVotingInfo() : null}
        {this.state.selectedAddress ? (
          <div style={styles.button}>
            <Button variant="contained" color="primary">
              View Scores
            </Button>
          </div>
        ) : null}
      </div>
    );
  }
}
