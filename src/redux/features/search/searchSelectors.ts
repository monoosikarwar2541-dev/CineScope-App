import type { RootState } from '@/redux/store';

export const selectSearchMovies = (state: RootState) =>
  state.search.movies;

export const selectSearchLoading = (state: RootState) =>
  state.search.loading;

export const selectSearchError = (state: RootState) =>
  state.search.error;

export const selectSearchQuery = (state: RootState) =>
  state.search.query;

export const selectSelectedGenreId = (state: RootState) =>
  state.search.selectedGenreId;