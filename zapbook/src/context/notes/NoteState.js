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
 return(
     <noteContext.Provider value = {{notes , setNotes}}>
         {props.children}
     </noteContext.Provider>
 )
}

export default NoteState;
