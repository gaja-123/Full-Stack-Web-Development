import React from 'react';
import './App.css';
import { NavBar } from './layouts/navbar-and-footer/NavBar';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';
import { Carousel } from './layouts/HomePage/Carousel';
import { Heros } from './layouts/HomePage/Heros';
import { LibraryServices } from './layouts/HomePage/LibraryServices';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ExploreTopBooks/>
      <Carousel/>
      <Heros/>
      <LibraryServices/>
    </div>
  );
}

export default App;
