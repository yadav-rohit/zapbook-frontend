import React, { useState } from "react";
import noteContext from "./noteContxt";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);
  // ?fetch Note
  const fetchNote = async (title, description, tag) => {
    //TODO: API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "auth-token":
          sessionStorage.getItem('Token'),
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }

  // ?Add Note
  const addNote = async (title, description, tag) => {
    //TODO: API call
    const response = await fetch(`${host}/api/notes/addnote/`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "auth-token":
          sessionStorage.getItem('Token'),
      },
      body: JSON.stringify({title , description , tag}), // body data type must match "Content-Type" header
    });
    const note = await response.json();
    // //? logic
    // const note = {
    //   _id: "",
    //   user: "61ed7064aa84662ae5f185ww0d",
    //   title: title,
    //   description: description,
    //   tag: tag,
    //   date: "2022-01-23T17:02:46.965Z",
    //   __v: 0,
    // };
    setNotes(notes.concat(note));
  };
  //?Delete a Note
  const deletenote = async (id) => {
    //!api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "auth-token":
          sessionStorage.getItem('Token'),
      },
      body: JSON.stringify({id}), // body data type must match "Content-Type" header
    });
    const json = response.json();
    console.log("deleting note with id" + id);
    const newnotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newnotes);
  };
  //?EDit Note
  const editnote = async (id, title, description, tag) => {
    //! api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "auth-token":
          sessionStorage.getItem('Token'),
      },
      body: JSON.stringify({title , description,tag}), // body data type must match "Content-Type" header
    });
    const json = response.json();
    //?edit logic
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <noteContext.Provider
      value={{ notes, setNotes, addNote, deletenote, editnote , fetchNote }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
