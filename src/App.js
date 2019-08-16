import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { Header } from './Header/Header';
import { Contents } from './Contents/Contents';
import { Scores } from './Scores/Scores';
import { About } from './About/About';

import { AddressContext } from './AddressContext';

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

    this.state = {
      address: {}
    };
  }

  render() {
    return (
      <Router>
        <AddressContext.Provider
          value={{
            address: this.state.address,
            updateAddress: this.updateAddress
          }}
        >
          <Header />
          <Route path="/" exact component={Contents} />
          <Route path="/scores/" component={Scores} />
          <Route path="/about/" component={About} />
        </AddressContext.Provider>
      </Router>
    );
  }
}

export default App;
