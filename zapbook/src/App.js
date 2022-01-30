import './App.css';
import './navbar.css';
import './home.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route, Link } from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Viewpage from './components/Viewpage';
import Listview from './components/Listview';

function App() {
  return (
    <div className="App">
      <NoteState>
     <Navbar/>
     <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Viewpage" element={<Viewpage/>} />
      </Routes>
      </NoteState>
     
    </div>
  );
}

export default App;
