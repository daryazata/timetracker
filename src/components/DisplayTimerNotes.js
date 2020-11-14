import React from 'react'
import "./TimeNote.css"
function DisplayTimerNotes({data}) {

    const display_notes= data.map((note, index)=>
    
            <div className="timeNote" key={note.id}>
             <p>{note.timerNote.timerNote}</p>   
                
<p>{note.timerNote.time?.h} <span> h </span>: {note.timerNote.time?.m} <span> min </span> </p>
<p>{note.timerNote.date}</p>
            </div>
    )
    return (
        <div>
            {display_notes}
        </div>
    )
}

export default DisplayTimerNotes
