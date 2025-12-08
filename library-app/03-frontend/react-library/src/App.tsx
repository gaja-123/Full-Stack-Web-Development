import './App.css';
import { NavBar } from './layouts/navbar-and-footer/NavBar';
import { Footer } from './layouts/navbar-and-footer/Footer';
import { HomePage } from './layouts/HomePage/Homepage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
