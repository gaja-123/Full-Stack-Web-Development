import React from 'react';
import './App.css';
import { NavBar } from './layouts/navbar-and-footer/NavBar';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ExploreTopBooks/>
    </div>
  );
}

export default App;
