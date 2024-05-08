import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import cdSlice from './cdSlice';
import lsSlice from './lsSlice';
import initSlice from './initSlice';
import statusSlice from './statusSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cd:cdSlice,
    ls:lsSlice,
    init:initSlice,
    status:statusSlice,
    
    
  },
});

export default store;