import React from 'react';

export const AddressContext = React.createContext({
  address: {},
  updateAddress: () => {},
  votingInformation: {},
  updateVotingInformation: () => {}
});
