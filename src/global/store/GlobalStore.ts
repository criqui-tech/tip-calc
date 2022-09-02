import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../actions/counter/CounterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer
  }
});
