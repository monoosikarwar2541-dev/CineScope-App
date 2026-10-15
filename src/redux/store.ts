
import { configureStore } from '@reduxjs/toolkit';

import movieReducer from '@/redux/features/movie/movieSlice';
import movieDetailsReducer from '@/redux/features/movie-details/movieDetailsSlice';


export const store = configureStore({
  reducer: {
    movie: movieReducer,
    movieDetails: movieDetailsReducer,

    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
