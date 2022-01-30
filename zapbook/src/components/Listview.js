import React, { useState , useEffect} from 'react';
import '../listview.css';
import notes from '../example.json';
import Note from './Note';
import Viewpage from './Viewpage';



const Listview = () => {
    // let listednotes = notes.note;
    const [listednotes , setNotess] = useState([]);
  
    const elmnt = () => {
          setNotess(notes.note);
        // title: `hello` ,
        // description: "heloooooo"
    };
    useEffect(() => {
      elmnt();
    }, []);
  return (<>
     <div className="area drop-shadow-xl self-center backdrop-blur-xl rounded-lg p-5 my-5">
        <p className='font-bold text-2xl pb-5 pl-5'> Your Notes </p>
       <div className="lists grid grid-row lg:grid-cols-3 gap-4 ">
         {listednotes.map((nts)=>
     <Note title={nts.title} description={nts.description} key={nts.id} tag={nts.tag}/>
         )}
         </div>
     </div>
  </>)
}

export default Listview;





