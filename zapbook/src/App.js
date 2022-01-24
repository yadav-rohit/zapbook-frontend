import './App.css';
import './navbar.css';
import './home.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
    </div>
  );
}

export default App;
