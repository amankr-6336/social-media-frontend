import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";
// import { setLoading } from "./appConfigSlice";

export const getUserProfile = createAsyncThunk( "user/getUserProfile", async (body) => {
        try {
            // thunkAPI.dispatch(setLoading(true));
            const response= await axiosClient.post('/user/getUserProfile',body);
            console.log('user rsponse',response)
            return response.result;
        } catch (error) {
            return Promise.reject(error);
        }
        // finally{
        //     thunkAPI.dispatch(setLoading(false));
        // }
    }
);

export const likeAndUnlikePost= createAsyncThunk('/post/likeAndUnlike',async(body) =>{
    try {
        // thunkAPI.dispatch(setLoading(true));
            const response= await axiosClient.post('/post/like',body);
            console.log('user rsponse',response)
            return response.result.post;
    } catch (error) {
        return Promise.reject(error);
    }
})

 
const postSlice=createSlice({
    name:'postsSlice',
    initialState:{
        userProfile:{}
    },
   
    extraReducers:(builder) =>{
        builder.addCase(getUserProfile.fulfilled, (state,action) =>{
             state.userProfile=action.payload;
        })
        .addCase(likeAndUnlikePost.fulfilled,(state,action) =>{
             const post=action.payload;
             const index= state?.userProfile?.posts?.findIndex(item => item._id===post._id);
             if(index && index !== -1){
                state.userProfile.posts[index]=post;
             }
        })
      
    }
})

export default postSlice.reducer; 




// galattttttttttttttttttttttttttttttttttttttttt

