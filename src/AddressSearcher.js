import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';
import PropTypes from 'prop-types';

import { AddressContext } from './AddressContext';

const baseEndpoint = 'https://auck-elec.herokuapp.com';
const apiEndpoint = `${baseEndpoint}/api`;
const searchEndpoint = `${apiEndpoint}/search`;

export class AddressSearcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: props.address.label
    };

    this.promiseOptions = this.promiseOptions.bind(this);
    this.searchAddress = this.searchAddress.bind(this);
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

  render() {
    return (
      <AddressContext.Consumer>
        {({ updateAddress }) => (
          <div style={{ width: '344px' }}>
            <AsyncSelect
              cacheOptions
              defaultOptions
              isClearable
              backspaceRemovesValue
              placeholder="Search address e.g. 1 Queen St"
              components={{ DropdownIndicator: () => null }}
              noOptionsMessage={() => null}
              loadOptions={this.promiseOptions}
              onChange={updateAddress}
              onInputChange={newAddress =>
                this.setState({ address: newAddress.label })
              }
              inputValue={this.state.address}
            />
          </div>
        )}
      </AddressContext.Consumer>
    );
  }
}

AddressSearcher.propTypes = {
  address: PropTypes.shape({
    label: PropTypes.string
  })
};

AddressSearcher.defaultProps = {
  address: {
    label: ''
  }
};
