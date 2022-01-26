import React, { useState } from 'react';
import noteContext from './noteContxt';

const NoteState = (props) => {

 return(
     <noteContext.Provider value = {{}}>
         {props.children}
     </noteContext.Provider>
 )
}

export default NoteState;
