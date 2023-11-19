import { configureStore } from '@reduxjs/toolkit';
import weather from '../slice/weatherSlice'
const store = configureStore({
    reducer: weather,
    middleware: getDefaultMiddleware => getDefaultMiddleware(), 
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
