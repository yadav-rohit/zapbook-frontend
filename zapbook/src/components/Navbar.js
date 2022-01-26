import React from 'react';
import { Link  , useLocation} from "react-router-dom";

function Navbar() {
  let location = useLocation();
  React.useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return(
    <nav className='flex  justify-around content-center items-center self-center my-7'> 
      <ul className="navlist flex justify-around content-center h-14 items-center drop-shadow-xl backdrop-blur-xl rounded-lg ">
        <div className="flex logo w-96">  
      <li className="justify-self-start logo text-2xl"><strong><i>Z</i></strong>apbook</li>
      </div> 
          <li className={`${location.pathname==='/'?'active':''}`} ><Link to="/" >Home</Link></li>
          <li  className={`${location.pathname==='/Viewpage'?'active':''}`}><Link to="/Viewpage">Your Notes</Link></li>
          <li className={`${location.pathname==='/Login'?'active':''}`} ><Link to="/Login">Login</Link></li>
          
      </ul>
    </nav>
  );
}

export default Navbar;
