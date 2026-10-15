
import { apiClient } from '@/api';
import { MOVIE_ENDPOINTS } from '@/api/endpoints/movie';

import type {
  MovieDetails,
  MovieCredits,
  MovieVideo,
  MovieReview,
  MovieListItem,
  MovieImages,
  MovieWatchProviders,
} from './movieDetailsTypes';

type ResultsResponse<T> = {
  results: T[];
};

export const getMovieDetails = async (
  movieId: number,
): Promise<MovieDetails> => {
  const response = await apiClient.get<MovieDetails>(
    MOVIE_ENDPOINTS.GET_BY_ID(movieId),
  );

  return response.data;
};

export const getMovieCredits = async (
  movieId: number,
): Promise<MovieCredits> => {
  const response = await apiClient.get<MovieCredits>(
    MOVIE_ENDPOINTS.GET_CREDITS(movieId),
  );

  return response.data;
};

export const getMovieVideos = async (
  movieId: number,
): Promise<MovieVideo[]> => {
  const response = await apiClient.get<ResultsResponse<MovieVideo>>(
    MOVIE_ENDPOINTS.GET_VIDEOS(movieId),
  );

  return response.data.results ?? [];
};

export const getMovieReviews = async (
  movieId: number,
): Promise<MovieReview[]> => {
  const response = await apiClient.get<ResultsResponse<MovieReview>>(
    MOVIE_ENDPOINTS.GET_REVIEWS(movieId),
  );

  return response.data.results ?? [];
};

export const getMovieRecommendations = async (
  movieId: number,
): Promise<MovieListItem[]> => {
  const response = await apiClient.get<ResultsResponse<MovieListItem>>(
    MOVIE_ENDPOINTS.GET_RECOMMENDATIONS(movieId),
  );

  return response.data.results ?? [];
};

export const getSimilarMovies = async (
  movieId: number,
): Promise<MovieListItem[]> => {
  const response = await apiClient.get<ResultsResponse<MovieListItem>>(
    MOVIE_ENDPOINTS.GET_SIMILAR(movieId),
  );

  return response.data.results ?? [];
};

export const getMovieImages = async (
  movieId: number,
): Promise<MovieImages> => {
  const response = await apiClient.get<MovieImages>(
    MOVIE_ENDPOINTS.GET_IMAGES(movieId),
  );

  return {
    backdrops: response.data.backdrops ?? [],
    posters: response.data.posters ?? [],
    logos: response.data.logos ?? [],
  };
};

export const getMovieWatchProviders = async (
  movieId: number,
): Promise<MovieWatchProviders> => {
  const response = await apiClient.get<{ results: MovieWatchProviders }>(
    MOVIE_ENDPOINTS.GET_WATCH_PROVIDERS(movieId),
  );

  return response.data.results ?? {};
};
