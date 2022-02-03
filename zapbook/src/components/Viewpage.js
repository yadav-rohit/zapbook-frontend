import React, { useContext, useState } from 'react';
import '../viewpage.css';
// import Confirmation from './Confirmation';
import Listview from './Listview';
import noteContxt from '../context/notes/noteContxt';



function Viewpage(props) {
  const context = useContext(noteContxt);
  let {addNote} = context;
  const [note , setNote] = useState({title:"" , description: "" , tag:""})
  const save = () =>{
    // !getting the note
    const title = document.querySelector(".title");
    const tag = document.querySelector(".tagss");
    const description = document.querySelector(".description");
    // if(tag.value.length() > 20){
    //       alert("tag size can't be this big");
    // }
    // console.log(title.innerHTML , tag.innerHTML , description.value );
       setNote({title: title.innerHTML ,description: description.value,tag: tag.innerHTML});
       console.log(note.title , note.description , note.tag);
       addNote(note.title , note.description , note.tag);
  }
  const [tag_class , setTagcolor] = useState('');
  function handleClick(classers){
    setTagcolor(`${classers}`);
  }
  const taghandel =() => {
    if(tag_class){
      setTagcolor('');
    }
  }
  return (<>
 
  <section className="main flex flex-col content-center justify-center ">
     <div className="area home_info flex-row self-center justify-center drop-shadow-xl backdrop-blur-xl rounded-lg p-5 pb-0 ">
         <div className="menubar text-xl flex  lg:flex-row">
           {/* <div><i className="fas fa-chevron-left mx-2 p-1 rounded-xl" style={{color: "#6b3eda" , boxShadow: "-2px 2px 10px 1px rgba(48, 41, 54, 0.459)"}}></i></div> */}
           <label className='text-md font-bold pr-2 pl-4' >Title:</label>
           <span className="title flex flex-row drop-shadow-md  self-center justify-center" suppressContentEditableWarning={true} contentEditable="true">It's the title</span>                      
           <span className={`title_tag mx-4 rounded-lg text-sm h-5 p-0.5 drop-shadow-md backdrop-blur-xl ${tag_class}`} >
             <div className="tagss drop-shadow-xl" suppressContentEditableWarning={true} contentEditable="true">
               {/* <ul>
               <li onClick={() => handleClick('important')}>Important</li>
               <li onClick={() => handleClick('List')}>List</li>
               <li onClick={() => handleClick('Todo')}>Todo</li>
               </ul> */}
             </div>
             {/* <i onClick={()=> taghandel()} className="fas fa-plus"></i> */}
             </span>
           </div>
         <div className="txtarea mx-4 my-2 rounded-lg">
           <textarea className="description text_area p-2" name="Notes" placeholder='hello threr <br> edaf' style={{width:"100%" , boxShadow: " inset 0px 1px 10px 0px rgba(48,48,48,0.6)" , borderRadius: "10px" , backgroundColor: "rgba(205, 205, 255 ,0.6)" , color: "black" , minHeight: "100%" }}></textarea>
         </div>
         <div className="flex flex-row content-center justify-center">
         <button className="btn confirm rounded-xl drop-shadow-md backdrop-blur-xl my-2 p-1 mx-5" onClick={()=> save()}>Save</button> 
         <button className="btn cancel rounded-xl drop-shadow-md backdrop-blur-xl my-2 p-1 mx-5">Cancel</button> 
         </div>        
     </div>
     <Listview/>
     </section>
  </>)
}

export default Viewpage;





