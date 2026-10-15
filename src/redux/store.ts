
import { configureStore } from '@reduxjs/toolkit';

import movieReducer from '@/redux/features/discover/discoverSlice';
import movieDetailsReducer from '@/redux/features/movie-details/movieDetailsSlice';
import searchReducer from '@/redux/features/search/searchSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    movieDetails: movieDetailsReducer,
    search: searchReducer,

    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
