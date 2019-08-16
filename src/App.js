import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import history from './history';

import { Header } from './Header/Header';
import { Contents } from './Contents/Contents';
import { Scores } from './Scores/Scores';
import { About } from './About/About';

import { AddressContext } from './AddressContext';
import { about, howWeScored, root, scores } from './Contants/routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.updateAddress = newAddress => {
      if (newAddress) {
        this.setState({ address: newAddress });
      } else {
        this.setState({ address: {} });
      }
    };

    this.updateVotingInformation = votingInformation =>
      this.setState({ votingInformation });

    this.state = {
      address: {},
      votingInformation: {}
    };
  }

  render() {
    return (
      <Router history={history}>
        <AddressContext.Provider
          value={{
            address: this.state.address,
            updateAddress: this.updateAddress,
            votingInformation: this.state.votingInformation,
            updateVotingInformation: this.updateVotingInformation
          }}
        >
          <Header />
          <Route path={root} exact component={Contents} />
          <Route path={scores} component={Scores} />
          <Route path={about} component={About} />
          <Route path={howWeScored} component={About} />
        </AddressContext.Provider>
      </Router>
    );
  }
}

export default App;
