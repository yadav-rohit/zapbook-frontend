import './App.css';
import './navbar.css';
import './home.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Viewpage from './components/Viewpage';
// import Listview from './components/Listview';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';

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
        <Route exact path="/Alert" element={<Alert/>} />
        <Route exact path="/Alertsignup" element={<Alert content="You have Sucessfully Registered , Verify yourself by link sent on your registered email" footer="Already Verified ?" lnkname="Login Here" lnk="/Login" type="fas fa-badge-check text-lime-700"/>} />
      </Routes>
      </NoteState>
     
    </div>
  );
}

export default App;
