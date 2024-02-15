import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";


export const getStory =createAsyncThunk("/story",async()=>{
   try {
    const response=await axiosClient.get('/story/');
   //  console.log(response.result);
    return response.result;
    
   } catch (error) {
      return Promise.reject(error);
   }
})

export const getAllStory=createAsyncThunk("/story/all", async()=>{
   try {
      const response=await axiosClient.get('/story/all');
      // console.log(response.result.story);
      return response.result;
   } catch (error) {
      return Promise.reject(error);
   }
})

const storySlice=createSlice({
   name:'storySlice',
   initialState:{
      story:{},
      allStory:{}
   },
   extraReducers:(builder)=>{
      builder.addCase(getStory.fulfilled,(state,action)=>{
         state.story=action.payload;
      })
      .addCase(getAllStory.fulfilled,(state,action)=>{
         state.allStory=action.payload;
      })
   },


})

export default storySlice.reducer