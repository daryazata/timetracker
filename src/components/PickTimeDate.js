import React ,{useState}from 'react'
import "date-fns"
import Grid from "@material-ui/core/Grid"
import DateFnsUtils from "@date-io/date-fns"
import { MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,

} from "@material-ui/pickers"
import { Input } from '@material-ui/core'
import {useDispatch} from "react-redux"
import "./TimeNote.css"


function PickTimeDate(props) {

  const dispatch = useDispatch()


    const [selectedDate, setSelectedDate] = useState(new Date("2020-11-14T12:00:00"))
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)


    const handleDateChange = (date) =>{
        setSelectedDate(date)
    }

    return (
        <div className="timeNoteOther">

            <h2>Plan your Timer</h2>
            <MuiPickersUtilsProvider utils={ DateFnsUtils}>
                <Grid container justify="space-around"> 
                
                <KeyboardDatePicker
                
               disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker"
                label="Date Picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    "aria-label":"change date"
                }}
                />
                
                
                </Grid>



            </MuiPickersUtilsProvider>
            <br/>
                <label>Hours</label>
                <br/>
                <input min="1" name="hours" onChange={(e)=>setHours(e.target.value)}  type="number"/>
                <br/>
                <label>Minutes</label>
                <br/>
                <input min="1" max="59" name="minutes" onChange={(e)=>setMinutes(e.target.value)} type="number"/>
                <br/>
 
            <button onClick={()=>props.addNote(selectedDate.toLocaleDateString(), hours, minutes)}>Save Timer Note</button>
        </div>
    )
}

export default PickTimeDate
