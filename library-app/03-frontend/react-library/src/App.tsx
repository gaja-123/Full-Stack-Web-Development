import React from 'react';
import './App.css';
import { NavBar } from './layouts/navbar-and-footer/NavBar';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';
import { Carousel } from './layouts/HomePage/Carousel';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ExploreTopBooks/>
      <Carousel/>
    </div>
  );
}

export default App;
