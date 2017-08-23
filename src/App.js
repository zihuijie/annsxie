import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Routes from './Routes';

import { PrimaryHeader, Footer, PageWrapper } from './components';

class App extends Component {
  render() {
    return (
      <PageWrapper>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ann S. Xie Professional Corporation</title>
          <link rel="canonical" href="https://annsxie.ca" />
        </Helmet>
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
