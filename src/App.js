import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import PuzzleBuilder from './containers/PuzzleBuilder/PuzzleBuilder';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <PuzzleBuilder />
        </Layout>
      </div>
    );
  }
  
}

export default App;
