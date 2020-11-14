import { configureStore } from '@reduxjs/toolkit';
import timerReducer from '../features/counter/timerSlice';

export default configureStore({
  reducer: {
    timer: timerReducer,
  },
});
