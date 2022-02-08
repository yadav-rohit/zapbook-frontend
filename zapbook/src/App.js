import './App.css';
import './navbar.css';
import './home.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route, Link } from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Viewpage from './components/Viewpage';
// import Listview from './components/Listview';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <NoteState>
     <Navbar/>
     <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Viewpage" element={<Viewpage/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/Signup" element={<Signup/>} />
      </Routes>
      </NoteState>
     
    </div>
  );
}

export default App;
