
import type { RootState } from '@/redux/store';

export const selectMovieDetailsState = (state: RootState) =>
  state.movieDetails;

export const selectMovieDetails = (state: RootState) =>
  state.movieDetails.details;

export const selectMovieCredits = (state: RootState) =>
  state.movieDetails.credits;

export const selectMovieVideos = (state: RootState) =>
  state.movieDetails.videos;

export const selectMovieReviews = (state: RootState) =>
  state.movieDetails.reviews;

export const selectMovieRecommendations = (state: RootState) =>
  state.movieDetails.recommendations;

export const selectSimilarMovies = (state: RootState) =>
  state.movieDetails.similar;

export const selectMovieImages = (state: RootState) =>
  state.movieDetails.images;

export const selectMovieWatchProviders = (state: RootState) =>
  state.movieDetails.watchProviders;

export const selectMovieDetailsLoading = (state: RootState) =>
  state.movieDetails.loading.details;

export const selectMovieDetailsError = (state: RootState) =>
  state.movieDetails.errors.details;
