import React from 'react'
import "./TimeNote.css"
function DisplayTimerNotes({data}) {

    const display_notes= data.map((note, index)=>
    
            <div className="timeNote" key={note.id}>
             <p>{note.timerNote.timerNote}</p>   
                
<p>{note.timerNote.time?.h}:{note.timerNote.time?.m}:{note.timerNote.time?.s}</p>
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
