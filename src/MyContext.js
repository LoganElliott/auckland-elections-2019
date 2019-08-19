import React from 'react';

export const MyContext = React.createContext({
  address: {},
  updateAddress: () => {},
  votingInformation: {},
  updateVotingInformation: () => {}
});
