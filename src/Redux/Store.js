import {configureStore} from '@reduxjs/toolkit';
import appConfigReducer from './slice/appConfigSlice';
import PostsReducer from './slice/PostsSlice';
import FeedDataReducer from './slice/FeedSlice';
import StoryReducer from './slice/StorySlice'


export default configureStore({
    reducer:{
      appConfigReducer,
      PostsReducer,
      FeedDataReducer,
      StoryReducer
    }
})