import {configureStore} from '@reduxjs/toolkit';
import appConfigReducer from './slice/appConfigSlice';
import PostsReducer from './slice/PostsSlice';
import FeedDataReducer from './slice/FeedSlice';


export default configureStore({
    reducer:{
      appConfigReducer,
      PostsReducer,
      FeedDataReducer
    }
})