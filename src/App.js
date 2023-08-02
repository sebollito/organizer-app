import React from 'react';
import Navbar from './components/navbar/navbar';
import Content from './components/content/content';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Include the Navbar component */}
      <Navbar />

      {/* Include the Content component */}
      <Content />
    </div>
  );
}

export default App;
