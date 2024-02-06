import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";


export const getStory =createAsyncThunk("/story",async()=>{
   try {
    const response=await axiosClient.get('/story/');
    console.log(response.result);
    return response.result
    
   } catch (error) {
      return Promise.reject(error);
   }
})

const storySlice=createSlice({
   name:'storySlice',
   initialState:{
      story:{}
   },
   extraReducers:(builder)=>{
      builder.addCase(getStory.fulfilled,(state,action)=>{
         state.story=action.payload;
      })
   }


})

export default storySlice.reducer