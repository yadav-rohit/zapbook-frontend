import React , {useContext , useEffect} from 'react';
import cld from '../assets/images/cloud.svg';
import noteContext from '../context/notes/noteContxt';
import Anime, { anime } from 'react-anime';

export default function Home() {
  
  return (
  <div>
      <section className="main flex flex-row content-center justify-center ">
      <div className="area home_info inline-grid  grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 self-center justify-center drop-shadow-xl backdrop-blur-xl rounded-lg ">
         <div className='px-10 py-10'><div className="flex flex-wrap pt-10 pb-16"><p className="text-6xl self-center"><strong>H</strong>ello There , <br /> My name is Rohit </p>
         </div>
         <p className='low_p pt-40 py-10 text-lg'>Zapbook is a Cloud based notepad , using which u can make , acess , update any of your important notes from anywhere from world</p>
         </div>
         <div className='flex flex-col content-center justify-center p-0'>
         <img src = {cld} className="cldimg hidden lg:block self-center drop-shadow-xl" />
         <div className='linkss flex  self-center justify-around text-2xl px-9 p-7 mb-10 drop-shadow-xl backdrop-blur-xl rounded-xl'>         
         <a href="http://github.com/yadav-rohit"><i className="one fab fa-github-square"></i></a> 
         <a href="https://www.linkedin.com/in/rohit-yadav-b2a0a7202/"><i className="two fab fa-linkedin "></i></a>
         <a href="https://twitter.com/yadav_rohit_26"><i className="three fab fa-twitter-square"></i></a>
         </div>
      </div>
      </div>
      </section>
  </div>
  )
}

