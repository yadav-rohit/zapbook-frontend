import React, { useState } from 'react';
import noteContext from './noteContxt';

const NoteState = (props) => {
 const notesInitial = [
        {
          "_id": "61ed8a368f77cf52ed7667e8",
          "user": "61ed7064aa84662ae5f1850d",
          "title": "hello",
          "description": "first trail of add note route",
          "tag": "important",
          "date": "2022-01-23T17:02:46.965Z",
          "__v": 0
        },
        {
          "_id": "61ed8a368f77cf52ed7667e8",
          "user": "61ed7064aa84662ae5f1850d",
          "title": "hello",
          "description": "first trail of add note route",
          "tag": "important",
          "date": "2022-01-23T17:02:46.965Z",
          "__v": 0
        },
        {
          "_id": "61ed8a368f77cf52ed7667e8",
          "user": "61ed7064aa84662ae5f1850d",
          "title": "hello",
          "description": "first trail of add note route",
          "tag": "important",
          "date": "2022-01-23T17:02:46.965Z",
          "__v": 0
        },
        {
          "_id": "61ed8a368f77cf52ed7667e8",
          "user": "61ed7064aa84662ae5f1850d",
          "title": "hello",
          "description": "first trail of add note route",
          "tag": "important",
          "date": "2022-01-23T17:02:46.965Z",
          "__v": 0
        }
      ]
  const [notes  , setNotes] = useState(notesInitial);

  // ?Add Note
  const addNote = (title , description , tag) => {
    //TODO: API call
   const note=  {
    "_id": "61ed8a368f77cf52ed7667e8",
          "user": "61ed7064aa84662ae5f1850d",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2022-01-23T17:02:46.965Z",
          "__v": 0
  };
    setNotes(notes.concat(note));
  }
  //?Delete a Note
  const deletenote = () => {

  }
  //?EDit Note
  const editnote = () =>{

  }
 return(
     <noteContext.Provider value = {{notes , setNotes , addNote}}>
         {props.children}
     </noteContext.Provider>
 )
}

export default NoteState;
