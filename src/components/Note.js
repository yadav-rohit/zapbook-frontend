import React, { useContext, useEffect, useState } from 'react';
import '../listview.css';
import Confirmation from './Confirmation';
// import Viewpage from './Viewpage';
import noteContxt from '../context/notes/noteContxt';


function Note(props) {
    //!adding context
    const context = useContext(noteContxt);
  const {deletenote , editnote} = context;

  let [vss , setVisibility ]= useState('hidden');
   const banners = () => {
     vss==='hidden'?setVisibility('block'):setVisibility('hidden');
      setTimeout( function() {setVisibility('hidden')} , 5000);
   }
   const [cont_edititability ,setedittable] = useState("false");
  //  const [note , setNote] = useState({id:"" ,title:"" , description: "" , tag:""});
   
  //  const onchange = () =>{
  //   const title = document.querySelector(".ttle");
  //   const tag = document.querySelector(".tag");
  //   const description = document.querySelector(".descriptions");
  //    setNote({id: props.id , title: title.innerHTML ,description: description.innerHTML ,tag : tag.innerHTML});
  //    setTimeout( function() {editnote( note.id , note.title ,note.description ,note.tag)} , 1000);
  //    //? used to reset note to stop duplicate note
  //   //  setTimeout( function() {setNote({id:"" ,title:"" , description: "" , tag:""})} , 100);
  //    console.log( note.id , note.title ,note.description ,note.tag);
  //  }
   const edit =() =>{
     setedittable('true');
   }

  return (<>
    <Confirmation  visible={vss} title="Warning" content={`${props.title} have been deleted!`}/> 
   <div className={`note flex flex-col shadow-2xl rounded-lg `} >
       <div className="titles flex content-center justify-between drop-shadow-md text-lg font-bold my-2"><div className="flex"><p className='ttle' suppressContentEditableWarning={true} contentEditable={cont_edititability}  >{props.title}</p>      
        <div className={`tag mx-1 px-1 rounded-lg ${props.tag}`} suppressContentEditableWarning={true} contentEditable={cont_edititability}  >{props.tag}</div></div>
       <div className="choices flex"> <i className="far fa-trash-alt pr-2" onClick={() => {banners("Warn") ; setTimeout( function() {deletenote(props.id)} , 5000)}}></i><i className="far fa-edit pr-2" onClick={edit}></i><i className="far fa-share-square"></i></div></div>
       <p className="descriptions rounded-lg p-3 " suppressContentEditableWarning={true} contentEditable={cont_edititability}>{props.description}</p>
   </div>
  </>)
}
export default Note;
