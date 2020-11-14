import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    timerNoteId:null,
    timerNote:null,
    timerNoteTime:null,
    timerNoteDate:null
  },
  reducers: {
      setTimerNoteInfo:(state, action)=>{
        state.timerNote = action.payload.timerNote;
        state.timerNoteDate = action.payload.imerNoteDate;

      }
  },
});

export const { setTimerNoteInfo } = timerSlice.actions;

export const selectTimerNote = state => state.timer.timerNote;
export const selectTimerNoteDate = state => state.timer.timerNoteDate;

export default timerSlice.reducer;
