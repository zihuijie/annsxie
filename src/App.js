import React, { Component } from 'react';

import Routes from './Routes';

import { PrimaryHeader, Footer, PageWrapper } from './components';

class App extends Component {
  render() {
    return (
      <PageWrapper>
        <PrimaryHeader />
        <main>
          <Routes />
        </main>
        <Footer />
      </PageWrapper>
    );
  }
}

export default App;
