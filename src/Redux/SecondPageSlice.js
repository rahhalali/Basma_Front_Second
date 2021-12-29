import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
export const GetInfo = createAsyncThunk(
    "info/GetInfo",
     async (payload) => {
        console.log('hekllo');
       const response =await axios('assets/locales/en/FourthData.json');
       return { result: response.data.second }
    }
);

const SecondPageSlice = createSlice({
    name: "info",
    initialState: {
        info:''
    },
    extraReducers:{
        [GetInfo.fulfilled]:(state,action)=>{
            state.info=(action.payload.result);
            console.log('state',state);
        }
    }
});

export default SecondPageSlice.reducer;