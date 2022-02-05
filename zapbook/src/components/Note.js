import React, { useContext, useRef, useState } from 'react';
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
   const [note , setNote] = useState({id:"" ,title:"" , description: "" , tag:""})
   const edit =() =>{
     setedittable('true');
   }
   
    const onChange = () => {
      // !getting the note
      if(setedittable){
   const title = document.querySelector(".titles");
   const tag = document.querySelector(".tag");
   const description = document.querySelector(".descriptions");
    setNote({id:props.id  ,title: title.innerHTML ,description: description.innerHTML,tag: tag.innerHTML});
    // editnote(note.id , note.title , note.description , note.tag);
    console.log(note);
 }
   }
  return (<>
    <Confirmation  visible={vss} title="Warning" content={`${props.title} have been deleted!`}/> 
   <div className={`note flex flex-col drop-shadow-xl rounded-lg ${props.tag}`} >
       <div className="titles flex content-center justify-between drop-shadow-md text-lg font-bold my-2"><div className="flex" suppressContentEditableWarning={true} contentEditable={cont_edititability} onChange={onChange}>{props.title}      
        <div className='tag mx-1 px-1 backdrop-blur-xl rounded-lg ' onChange={onChange}>{props.tag}</div></div>
       <div className="choices flex"> <i className="far fa-trash-alt pr-2" onClick={() => {banners("Warn") ; setTimeout( function() {deletenote(props.id)} , 5000)}} onChange={onChange}></i><i className="far fa-edit pr-2" onClick={edit}></i><i className="far fa-share-square"></i></div></div>
       <p className="descriptions rounded-lg p-3 " suppressContentEditableWarning={true} contentEditable={cont_edititability} onChange={onChange}>{props.description}</p>
   </div>
  </>)
}
export default Note;
