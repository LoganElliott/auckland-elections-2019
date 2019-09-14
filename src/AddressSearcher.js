import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';
import PropTypes from 'prop-types';

import history from './history';
import { MyContext } from './MyContext';
import { getVotingInformation } from './getVotingInformation';
import { searchEndpoint } from './Contants/endpoints';

const styles = {
  searchBox: {
    flex: 1,
    minWidth: '300px',
    maxWidth: '400px',
    padding: '8px'
  }
};

export class AddressSearcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: props.address ? props.address.label : ''
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

    const request = new Request(searchEndpoint, requestInit);

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
      <MyContext.Consumer>
        {({ updateAddress, updateVotingInformation }) => (
          <div style={styles.searchBox}>
            <AsyncSelect
              cacheOptions
              defaultOptions
              isClearable
              backspaceRemovesValue
              placeholder="Search address e.g. 1 Queen St"
              components={{ DropdownIndicator: () => null }}
              noOptionsMessage={() => null}
              loadOptions={this.promiseOptions}
              onChange={async value => {
                updateAddress(value);
                if (value) {
                  const votingInformation = await getVotingInformation(
                    value.value
                  );
                  updateVotingInformation(votingInformation);
                  let query = `ward=${votingInformation.ward}&localBoard=${votingInformation.localBoard}`;
                  if (votingInformation.subdivision) {
                    query = query.concat(
                      `&subdivision=${votingInformation.subdivision}`
                    );
                  }
                  history.push({
                    pathname: '/scores',
                    search: `?${query}`
                  });
                } else {
                  history.push({
                    pathname: '/scores',
                    search: ``
                  });
                }
              }}
              onInputChange={newAddress =>
                this.setState({ address: newAddress.label })
              }
              inputValue={this.state.address}
            />
          </div>
        )}
      </MyContext.Consumer>
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
