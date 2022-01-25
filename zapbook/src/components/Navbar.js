import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return(
    <nav className='flex  justify-around content-center items-center self-center my-7'> 
      <ul className="navlist flex justify-around content-center h-14 items-center drop-shadow-xl backdrop-blur-xl rounded-lg ">
        <div className="flex logo w-96">  
      <li className="justify-self-start logo text-2xl"><strong><i>Z</i></strong>apbook</li>
      </div> 
          <li ><Link to="/">Home</Link></li>
          <li  ><Link to="/Login">Login</Link></li>
          <li  ><Link to="/Sign-up">Sign-up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
