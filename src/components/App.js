import React, { Component } from 'react';

import Navbar from './Navbar';
import PlayList from './PlayList';
import PlayListForm from './PlayListForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="body-container">          
          <PlayListForm />
          <PlayList />
        </div>
      </div>
    );
  }
}

export default App;
