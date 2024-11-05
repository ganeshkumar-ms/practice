import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CountrSlice';
export default configureStore({
  reducer:{
    counter:counterReducer
  }
})