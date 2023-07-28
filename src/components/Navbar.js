import React, { useState } from 'react';
import { Link  , useLocation , useNavigate} from "react-router-dom";

function Navbar() {
  let location = useLocation();
  const nav = useNavigate();
  const [userorlogin , setuserorlogin] = useState((<li className={`${location.pathname==='/Login'?'active':''}`} ><Link to="/Login">Login</Link></li>));
  React.useEffect(() => {
    console.log(location.pathname);
    if(sessionStorage.name){
      setuserorlogin(
      <li className={`${location.pathname==='/Login'?'active':''}`} >
        <Link to="#">Hi! {sessionStorage.getItem('name')}
        <i title='LogOut' className="fad fa-sign-out-alt mx-1" onClick={async ()=>{ sessionStorage.removeItem('Token'); await sessionStorage.removeItem('name'); nav("/Login"); setuserorlogin((<li className={`${location.pathname==='/Login'?'active':''}`} ><Link to="/Login">Login</Link></li>));}}></i>
        </Link>
        </li>
      )
      }  
  }, [location]);
 
 
  return(
    <nav className='flex flex-col md:flex-row justify-around content-center items-center self-center my-7'> 
      <ul className="navlist flex flex-wrap md:flex-row justify-around content-center h-14 items-center drop-shadow-xl backdrop-blur-xl rounded-lg ">
        <div className="flex logo w-96">  
      <li className=" logo text-2xl"><strong><i>Z</i></strong>apbook</li>
      </div> 
          <li className={`${location.pathname==='/'?'active':''}`} ><Link to="/" >Home</Link></li>
          <li  className={`${location.pathname==='/Viewpage'?'active':''}`}><Link to="/Viewpage">Your Notes</Link></li>
          {userorlogin}
      </ul>
    </nav>
  );
}

export default Navbar;
