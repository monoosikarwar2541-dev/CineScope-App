
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  getMovieDetails,
  getMovieCredits,
  getMovieVideos,
  getMovieReviews,
  getMovieRecommendations,
  getSimilarMovies,
  getMovieImages,
  getMovieWatchProviders,
} from './movieDetailsService';

import type {
  MovieDetails,
  MovieCredits,
  MovieVideo,
  MovieReview,
  MovieListItem,
  MovieImages,
  MovieWatchProviders,
} from './movieDetailsTypes';

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

function createMovieDetailsThunk<T>(typePrefix: string, request: (id: number) => Promise<T>) {
  return createAsyncThunk<T, number, { rejectValue: string }>(
    typePrefix,
    async (movieId, { rejectWithValue }) => {
      try {
        return await request(movieId);
      } catch (error: unknown) {
        return rejectWithValue(getErrorMessage(error));
      }
    },
  );
}

export const fetchMovieDetails = createMovieDetailsThunk<MovieDetails>(
  'movieDetails/fetchDetails',
  getMovieDetails,
);

export const fetchMovieCredits = createMovieDetailsThunk<MovieCredits>(
  'movieDetails/fetchCredits',
  getMovieCredits,
);

export const fetchMovieVideos = createMovieDetailsThunk<MovieVideo[]>(
  'movieDetails/fetchVideos',
  getMovieVideos,
);

export const fetchMovieReviews = createMovieDetailsThunk<MovieReview[]>(
  'movieDetails/fetchReviews',
  getMovieReviews,
);

export const fetchMovieRecommendations = createMovieDetailsThunk<MovieListItem[]>(
  'movieDetails/fetchRecommendations',
  getMovieRecommendations,
);

export const fetchSimilarMovies = createMovieDetailsThunk<MovieListItem[]>(
  'movieDetails/fetchSimilar',
  getSimilarMovies,
);

export const fetchMovieImages = createMovieDetailsThunk<MovieImages>(
  'movieDetails/fetchImages',
  getMovieImages,
);

export const fetchMovieWatchProviders = createMovieDetailsThunk<MovieWatchProviders>(
  'movieDetails/fetchWatchProviders',
  getMovieWatchProviders,
);
