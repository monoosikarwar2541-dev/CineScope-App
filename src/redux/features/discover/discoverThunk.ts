
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  searchMovies,
} from './discoverService';

import type { Movie } from './discoverTypes';

const getErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data?.status_message ||
      error.response?.data?.message ||
      error.message ||
      'Movie API request failed'
    );
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Something went wrong';
};

export const fetchTrendingMovies = createAsyncThunk<
  Movie[],
  void,
  { rejectValue: string }
>(
  'movie/fetchTrending',
  async (_, { rejectWithValue }) => {
    try {
      return await getTrendingMovies();
    } catch (error: unknown) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

export const fetchPopularMovies = createAsyncThunk<
  Movie[],
  void,
  { rejectValue: string }
>(
  'movie/fetchPopular',
  async (_, { rejectWithValue }) => {
    try {
      return await getPopularMovies();
    } catch (error: unknown) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

export const fetchTopRatedMovies = createAsyncThunk<
  Movie[],
  void,
  { rejectValue: string }
>(
  'movie/fetchTopRated',
  async (_, { rejectWithValue }) => {
    try {
      return await getTopRatedMovies();
    } catch (error: unknown) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

export const fetchUpcomingMovies = createAsyncThunk<
  Movie[],
  void,
  { rejectValue: string }
>(
  'movie/fetchUpcoming',
  async (_, { rejectWithValue }) => {
    try {
      return await getUpcomingMovies();
    } catch (error: unknown) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

export const fetchMoviesBySearch = createAsyncThunk<
  Movie[],
  string,
  { rejectValue: string }
>(
  'movie/search',
  async (query, { rejectWithValue }) => {
    try {
      return await searchMovies(query);
    } catch (error: unknown) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);
