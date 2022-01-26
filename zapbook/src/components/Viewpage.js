import React from 'react';
import '../viewpage.css';

function Viewpage() {
  return (<>
  <section className="main flex flex-row content-center justify-center ">
     <div className="area home_info flex-row self-center justify-center drop-shadow-xl backdrop-blur-xl rounded-lg p-5 ">
         <div className="menubar text-xl flex">
           <div className="title">It's a Note </div>
           <span className="title_tag mx-4 rounded-lg text-sm imp h-5 p-0.5 drop-shadow-md backdrop-blur-xl" >Important</span>
           </div>
         <div className="hello">hello</div>
     </div>
     </section>
  </>)
}

export default Viewpage;





