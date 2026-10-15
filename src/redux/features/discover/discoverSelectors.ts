
import type { RootState } from '@/redux/store';

export const selectMovieState = (state: RootState) =>
  state.movie;

export const selectTrendingMovies = (state: RootState) =>
  state.movie.trending;

export const selectPopularMovies = (state: RootState) =>
  state.movie.popular;

export const selectTopRatedMovies = (state: RootState) =>
  state.movie.topRated;

export const selectUpcomingMovies = (state: RootState) =>
  state.movie.upcoming;

export const selectSearchResults = (state: RootState) =>
  state.movie.searchResults;

export const selectTrendingLoading = (state: RootState) =>
  state.movie.loading.trending;

export const selectPopularLoading = (state: RootState) =>
  state.movie.loading.popular;

export const selectTopRatedLoading = (state: RootState) =>
  state.movie.loading.topRated;

export const selectUpcomingLoading = (state: RootState) =>
  state.movie.loading.upcoming;

export const selectSearchLoading = (state: RootState) =>
  state.movie.searchLoading;

export const selectMovieError = (state: RootState) =>
  state.movie.error;
