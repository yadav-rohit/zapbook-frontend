import React, {  useContext} from 'react';
import '../listview.css';
// import notes from '../example.json';
import Note from './Note';
// import Viewpage from './Viewpage';
import noteContxt from '../context/notes/noteContxt';



const Listview = (props) => {
  const context = useContext(noteContxt);
  let {notes, setNotes} = context;
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
    console.log(notes);
  return (<>
     <div className="area drop-shadow-xl self-center backdrop-blur-xl rounded-lg p-5 my-5">
        <p className='font-bold text-2xl pb-5 pl-5'> Your Notes </p>
       <div className="lists grid grid-row lg:grid-cols-3 gap-4 ">
         {notes.map((note)=> 
     <Note title={note.title} description={note.description} key={note.id} tag={note.tag}/>
         )}
         </div>
     </div>
  </>)
}

export default Listview;





