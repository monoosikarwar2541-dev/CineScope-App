
import { createSlice } from '@reduxjs/toolkit';

import type { Movie, MovieState } from './discoverTypes';

import {
  fetchTrendingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchMoviesBySearch,
} from './discoverThunk';

const initialState: MovieState = {
  trending: [],
  popular: [],
  topRated: [],
  upcoming: [],
  searchResults: [],

  loading: {
    trending: false,
    popular: false,
    topRated: false,
    upcoming: false,
  },

  searchLoading: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,

  reducers: {
    clearSearchResults: state => {
      state.searchResults = [];
      state.searchLoading = false;
    },

    clearMovieError: state => {
      state.error = null;
    },
  },

  extraReducers: builder => {
    builder
      // Trending movies
      .addCase(fetchTrendingMovies.pending, state => {
        state.loading.trending = true;
        state.error = null;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.loading.trending = false;
        state.trending = action.payload;
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.loading.trending = false;
        state.error =
          action.payload ?? action.error.message ?? 'Failed to load trending movies';
      })

      // Popular movies
      .addCase(fetchPopularMovies.pending, state => {
        state.loading.popular = true;
        state.error = null;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading.popular = false;
        state.popular = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loading.popular = false;
        state.error =
          action.payload ?? action.error.message ?? 'Failed to load popular movies';
      })

      // Top-rated movies
      .addCase(fetchTopRatedMovies.pending, state => {
        state.loading.topRated = true;
        state.error = null;
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.loading.topRated = false;
        state.topRated = action.payload;
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.loading.topRated = false;
        state.error =
          action.payload ?? action.error.message ?? 'Failed to load top-rated movies';
      })

      // Upcoming movies
      .addCase(fetchUpcomingMovies.pending, state => {
        state.loading.upcoming = true;
        state.error = null;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.loading.upcoming = false;
        state.upcoming = action.payload;
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        state.loading.upcoming = false;
        state.error =
          action.payload ?? action.error.message ?? 'Failed to load upcoming movies';
      })

      // Movie search
      .addCase(fetchMoviesBySearch.pending, state => {
        state.searchLoading = true;
        state.error = null;
      })
      .addCase(fetchMoviesBySearch.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.searchResults = action.payload;
      })
      .addCase(fetchMoviesBySearch.rejected, (state, action) => {
        state.searchLoading = false;
        state.error =
          action.payload ?? action.error.message ?? 'Movie search failed';
      });
  },
});

export const { clearSearchResults, clearMovieError } =
  movieSlice.actions;

export default movieSlice.reducer;
