import React, {  useContext , useEffect , useState} from 'react';
import '../listview.css';
// import notes from '../example.json';
import Note from './Note';
// import Viewpage from './Viewpage';
import noteContxt from '../context/notes/noteContxt';



const Listview = (props) => {
  const context = useContext(noteContxt);
  let {notes , fetchNote , editnote} = context;
  const [note , setNote] = useState({id:"" ,title:"" , description: "" , tag:""})
    // let listednotes = notes.note;
    // const [listednotes , setNotess] = useState([]);
  
    // const elmnt = () => {
    //       setNotess(notes.note);
    //     // title: `hello` ,
    //     // description: "heloooooo"
    // };
    // useEffect(() => {
    //   elmnt();
    // }, []);
    useEffect(() => {
      fetchNote();
    }, []);
  return (<>
     <div className="area drop-shadow-xl self-center backdrop-blur-xl rounded-lg p-5 my-5">
        <p className='font-bold text-2xl pb-5 pl-5'> Your Notes </p>
        <div className='mx-5'>
         {notes.length===0&&'no notes here'}
         </div>
       <div className="lists grid grid-row lg:grid-cols-3 gap-4 ">
         {notes.map((note)=> 
     <Note id={note._id} title={note.title} description={note.description} key={note._id} tag={note.tag}/>
         )}
         </div>
     </div>
  </>)
}

export default Listview;





