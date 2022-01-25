import './App.css';
import './navbar.css';
import './home.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
     
    </div>
  );
}

export default App;
