import React, { useState } from 'react';
import '../listview.css';
import Confirmation from './Confirmation';
// import Viewpage from './Viewpage';

function Note(props) {
  let [vss , setVisibility ]= useState('hidden');
   const banners = () => {
     vss==='hidden'?setVisibility('block'):setVisibility('hidden');
      setTimeout( function() {setVisibility('hidden')} , 5000);
   }
   const [cont_edititability ,setedittable] = useState("false");
   const edit =() =>{
     setedittable('true');
   }
  return (<>
    <Confirmation  visible={vss} title="Warning" content={`${props.title} have been deleted!`}/> 
   <div className={`note flex flex-col  backdrop-blur-xl rounded-lg ${props.tag}`} >
       <div className="titles flex content-center justify-between drop-shadow-md text-lg font-bold my-2"><p suppressContentEditableWarning={true} contentEditable={cont_edititability}>{props.title} </p><div className="choices flex"> <i className="far fa-trash-alt pr-2" onClick={() => banners("Warn")}></i><i className="far fa-edit pr-2" onClick={edit}></i><i className="far fa-share-square"></i></div></div>
       <p className="descriptions rounded-lg p-3 " suppressContentEditableWarning={true} contentEditable={cont_edititability}>{props.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rem ipsam provident minus natus nihil commodi deserunt dicta sit vel voluptas qui non culpa expedita velit, fuga ad magnam ratione rerum. Accusamus, numquam! Delectus! </p>
   </div>
  </>)
}
export default Note;
