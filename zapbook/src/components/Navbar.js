import React from 'react';


function Navbar() {
  return(
    <nav className='flex  justify-around content-center items-center self-center my-7'> 
      <ul className="navlist flex justify-around content-center h-14 items-center drop-shadow-xl backdrop-blur-xl rounded-lg ">
        <div className="flex logo w-96">  
      <li className="justify-self-start logo text-2xl"><strong><i>Z</i></strong>apbook</li>
      </div> 
          <li>Home</li>
          <li>Login</li>
          <li>Sign-up</li>
      </ul>
    </nav>
  );
}

export default Navbar;
