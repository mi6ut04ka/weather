import { createEntityAdapter, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const citiesAdapter = createEntityAdapter();

const initialState = citiesAdapter.getInitialState({
    citiesLoadingStatus: 'idle',
    selectSity: {}
})

export const getCities = createAsyncThunk(
    'cities/getSities',
    (letter)=>{
        const {request} = useHttp();
        return request(`https://data-api.oxilor.com/rest/search-regions?searchTerm=${letter}&type=city`, 'GET', null, {'Authorization': 'Bearer DgpEwd3LGC52YGK_FVvj7e8i506stH', 'Content-Type': 'aplication/json'});
    }
)

const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getCities.pending, state => {state.citiesLoadingStatus = 'loading'})
            .addCase(getCities.fulfilled, (state, actions) => {
                state.citiesLoadingStatus = 'idle';
                getCities.setAll(state, actions.payload)
            })
            .addCase(getCities.rejected, state => {state.citiesLoadingStatus = 'error'})
    }
})

const {reducer} = citiesSlice;

export default reducer;