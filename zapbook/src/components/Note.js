import React from 'react';
import '../listview.css';
import Viewpage from './Viewpage';

function Note(props) {
    // let {title , description}= props;
    // const editor = () => {
    //   alert('hello world');
    //   return <Viewpage/>
    // }
  return (<>

   <div className={`note flex flex-col  backdrop-blur-xl rounded-lg ${props.tag}`} >
       <div className="titles flex content-center justify-between drop-shadow-md text-lg font-bold">{props.title} <div className="choices flex"> <i className="far fa-trash-alt pr-2"></i><i className="far fa-edit pr-2"></i><i className="far fa-share-square"></i></div></div>
       <p className="descriptions rounded-lg p-3">{props.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rem ipsam provident minus natus nihil commodi deserunt dicta sit vel voluptas qui non culpa expedita velit, fuga ad magnam ratione rerum. Accusamus, numquam! Delectus! </p>
   </div>
  </>)
}
export default Note;
