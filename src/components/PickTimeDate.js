import React from 'react'
import "date-fns"
import Grid from "@material-ui/core/Grid"
import DateFnsUtils from "@date-io/date-fns"
import { MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,

} from "@material-ui/pickers"
import { Input } from '@material-ui/core'

function PickTimeDate() {


    const [selectedDate, setSelectedDate] = React.useState(new Date("2020-09-11T12:00:00"))

    const handleDateChange = (date) =>{
        setSelectedDate(date)
    }

    return (
        <div>
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
                <input type="text"/>
                <br/>
                <label>Minutes</label>
                <input type="text"/>
                <br/>
            <Input/ >
        </div>
    )
}

export default PickTimeDate
