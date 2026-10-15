import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { SearchState } from './searchTypes';

import {
  fetchPopularMovies,
  fetchSearchMovies,
  fetchMoviesByGenre,
} from './searchThunk';

const initialState: SearchState = {
  movies: [],
  loading: false,
  error: null,
  query: '',
  selectedGenreId: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },

    setSelectedGenre(state, action: PayloadAction<number | null>) {
      state.selectedGenreId = action.payload;
    },

    clearSearch(state) {
      state.query = '';
      state.error = null;
    },

    clearSearchError(state) {
      state.error = null;
    },
  },

  extraReducers: builder => {
    builder
      // Popular movies
      .addCase(fetchPopularMovies.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload ?? action.error.message ?? 'Failed to load movies';
      })

      // Search movies
      .addCase(fetchSearchMovies.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchSearchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload ?? action.error.message ?? 'Search failed';
      })

      // Genre discovery
      .addCase(fetchMoviesByGenre.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMoviesByGenre.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload ?? action.error.message ?? 'Failed to load genre movies';
      });
  },
});

export const {
  setSearchQuery,
  setSelectedGenre,
  clearSearch,
  clearSearchError,
} = searchSlice.actions;

export default searchSlice.reducer;