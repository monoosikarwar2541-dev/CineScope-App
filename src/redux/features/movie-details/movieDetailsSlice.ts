
import { createSlice } from '@reduxjs/toolkit';

import type { MovieDetailsState } from './movieDetailsTypes';

import {
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieVideos,
  fetchMovieReviews,
  fetchMovieRecommendations,
  fetchSimilarMovies,
  fetchMovieImages,
  fetchMovieWatchProviders,
} from './movieDetailsThunk';

const initialState: MovieDetailsState = {
  details: null,
  credits: null,
  videos: [],
  reviews: [],
  recommendations: [],
  similar: [],
  images: null,
  watchProviders: null,

  loading: {
    details: false,
    credits: false,
    videos: false,
    reviews: false,
    recommendations: false,
    similar: false,
    images: false,
    watchProviders: false,
  },

  errors: {
    details: null,
    credits: null,
    videos: null,
    reviews: null,
    recommendations: null,
    similar: null,
    images: null,
    watchProviders: null,
  },
};

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {
    clearMovieDetails: () => initialState,
  },
  extraReducers: builder => {
    builder
      // Movie details
      .addCase(fetchMovieDetails.pending, state => {
        state.loading.details = true;
        state.errors.details = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.loading.details = false;
        state.details = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.loading.details = false;
        state.errors.details =
          action.payload ?? action.error.message ?? 'Failed to load movie details';
      })

      // Credits
      .addCase(fetchMovieCredits.pending, state => {
        state.loading.credits = true;
        state.errors.credits = null;
      })
      .addCase(fetchMovieCredits.fulfilled, (state, action) => {
        state.loading.credits = false;
        state.credits = action.payload;
      })
      .addCase(fetchMovieCredits.rejected, (state, action) => {
        state.loading.credits = false;
        state.errors.credits =
          action.payload ?? action.error.message ?? 'Failed to load credits';
      })

      // Videos
      .addCase(fetchMovieVideos.pending, state => {
        state.loading.videos = true;
        state.errors.videos = null;
      })
      .addCase(fetchMovieVideos.fulfilled, (state, action) => {
        state.loading.videos = false;
        state.videos = action.payload;
      })
      .addCase(fetchMovieVideos.rejected, (state, action) => {
        state.loading.videos = false;
        state.errors.videos =
          action.payload ?? action.error.message ?? 'Failed to load videos';
      })

      // Reviews
      .addCase(fetchMovieReviews.pending, state => {
        state.loading.reviews = true;
        state.errors.reviews = null;
      })
      .addCase(fetchMovieReviews.fulfilled, (state, action) => {
        state.loading.reviews = false;
        state.reviews = action.payload;
      })
      .addCase(fetchMovieReviews.rejected, (state, action) => {
        state.loading.reviews = false;
        state.errors.reviews =
          action.payload ?? action.error.message ?? 'Failed to load reviews';
      })

      // Recommendations
      .addCase(fetchMovieRecommendations.pending, state => {
        state.loading.recommendations = true;
        state.errors.recommendations = null;
      })
      .addCase(fetchMovieRecommendations.fulfilled, (state, action) => {
        state.loading.recommendations = false;
        state.recommendations = action.payload;
      })
      .addCase(fetchMovieRecommendations.rejected, (state, action) => {
        state.loading.recommendations = false;
        state.errors.recommendations =
          action.payload ?? action.error.message ?? 'Failed to load recommendations';
      })

      // Similar movies
      .addCase(fetchSimilarMovies.pending, state => {
        state.loading.similar = true;
        state.errors.similar = null;
      })
      .addCase(fetchSimilarMovies.fulfilled, (state, action) => {
        state.loading.similar = false;
        state.similar = action.payload;
      })
      .addCase(fetchSimilarMovies.rejected, (state, action) => {
        state.loading.similar = false;
        state.errors.similar =
          action.payload ?? action.error.message ?? 'Failed to load similar movies';
      })

      // Images
      .addCase(fetchMovieImages.pending, state => {
        state.loading.images = true;
        state.errors.images = null;
      })
      .addCase(fetchMovieImages.fulfilled, (state, action) => {
        state.loading.images = false;
        state.images = action.payload;
      })
      .addCase(fetchMovieImages.rejected, (state, action) => {
        state.loading.images = false;
        state.errors.images =
          action.payload ?? action.error.message ?? 'Failed to load images';
      })

      // Watch providers
      .addCase(fetchMovieWatchProviders.pending, state => {
        state.loading.watchProviders = true;
        state.errors.watchProviders = null;
      })
      .addCase(fetchMovieWatchProviders.fulfilled, (state, action) => {
        state.loading.watchProviders = false;
        state.watchProviders = action.payload;
      })
      .addCase(fetchMovieWatchProviders.rejected, (state, action) => {
        state.loading.watchProviders = false;
        state.errors.watchProviders =
          action.payload ?? action.error.message ?? 'Failed to load watch providers';
      });
  },
});

export const { clearMovieDetails } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;
