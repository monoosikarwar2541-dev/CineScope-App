import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getPopularMoviesAPI,
  searchMoviesAPI,
  discoverMoviesByGenreAPI,
} from './searchService';

import type { Movie } from '@/redux/features/discover/discoverTypes';
import type {
  SearchMoviesParams,
  DiscoverMoviesParams,
} from './searchTypes';

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return 'Something went wrong. Please try again.';
}

export const fetchPopularMovies = createAsyncThunk<
  Movie[],
  void,
  { rejectValue: string }
>(
  'search/fetchPopularMovies',
  async (_, { rejectWithValue }) => {
    try {
      return await getPopularMoviesAPI();
    } catch (error: unknown) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

export const fetchSearchMovies = createAsyncThunk<
  Movie[],
  SearchMoviesParams,
  { rejectValue: string }
>(
  'search/fetchSearchMovies',
  async (params, { rejectWithValue }) => {
    try {
      return await searchMoviesAPI(params);
    } catch (error: unknown) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

export const fetchMoviesByGenre = createAsyncThunk<
  Movie[],
  DiscoverMoviesParams,
  { rejectValue: string }
>(
  'search/fetchMoviesByGenre',
  async (params, { rejectWithValue }) => {
    try {
      return await discoverMoviesByGenreAPI(params);
    } catch (error: unknown) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);