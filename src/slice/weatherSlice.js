import { createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const weatherAdapter = createEntityAdapter();

const initialState = weatherAdapter.getInitialState({
    weatherLoadingStatus: 'idle',
});


export const getWeather = createAsyncThunk(
    'weather/getWeather',
    (sityName)=>{
        const {request} = useHttp();
        return request(`https://api.openweathermap.org/data/2.5/forecast?q=${sityName}&appid=4095eb796212156ff1a218a9b0f8a2fd`);
    }
)

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, state => {state.weatherLoadingStatus = 'loading'})
            .addCase(getWeather.fulfilled, (state, actions) => {
                state.weatherLoadingStatus = 'idle';
                weatherAdapter.setAll(state, actions.payload)
            })
            .addCase(getWeather.rejected, state => {state.weatherLoadingStatus = 'error'})

        
    }
})

const {actions, reducer} = weatherSlice;

export default reducer;