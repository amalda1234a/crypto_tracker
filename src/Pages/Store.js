import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from '../Pages/CryptoSlice'; 
const store = configureStore({
  reducer: {
    crypto: cryptoReducer, 
  },
});

export default store;
