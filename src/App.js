import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import qs from 'qs';

import history from './history';

import { Header } from './Header/Header';
import { Contents } from './Contents/Contents';
import { Scores } from './Scores/Scores';
import { About } from './About/About';

import { MyContext } from './MyContext';
import { about, howWeScored, root, scores } from './Contants/routes';
import { HowWeScored } from './HowWeScored/HowWeScored';

class App extends Component {
  constructor(props) {
    super(props);

    this.updateAddress = newAddress => {
      if (newAddress && newAddress) {
        this.setState({ address: newAddress });
      } else {
        this.setState({ address: null });
      }
    };

    this.updateVotingInformation = votingInformation =>
      this.setState({ votingInformation });

    const votingInformation = history.location.search
      ? qs.parse(decodeURI(history.location.search.substring(1)))
      : null;

    this.state = {
      address: null,
      votingInformation
    };
  }

  render() {
    return (
      <Router history={history}>
        <MyContext.Provider
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
          <Route path={howWeScored} component={HowWeScored} />
        </MyContext.Provider>
      </Router>
    );
  }
}

export default App;
