

import { MOVIE_ENDPOINTS } from '@/api/endpoints/movie';
import type { Movie, MovieResponse } from './movieTypes';
import { apiClient } from '@/api';
export const getImageUrl = (
  path: string | null|undefined,
  size = 'w500',
): string | null => {
  if (!path) {
    return null;
  }

  return `https://image.tmdb.org/t/p/${size}${path}`;
};

export const getTrendingMovies = async (): Promise<Movie[]> => {
  const response = await apiClient.get<MovieResponse>(
    MOVIE_ENDPOINTS.TRENDING,
  );
console.log(' Trending Response Data:', response.data);
  return response.data.results ?? [];
};

export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await apiClient.get<MovieResponse>(
    MOVIE_ENDPOINTS.POPULAR,
  );
console.log('Populer Response Data:', response.data);
  return response.data.results ?? [];
};

export const getTopRatedMovies = async (): Promise<Movie[]> => {
  const response = await apiClient.get<MovieResponse>(
    MOVIE_ENDPOINTS.TOP_RATED,
  );

  return response.data.results ?? [];
};

export const getUpcomingMovies = async (): Promise<Movie[]> => {
  const response = await apiClient.get<MovieResponse>(
    MOVIE_ENDPOINTS.UPCOMING,
  );

  return response.data.results ?? [];
};

export const searchMovies = async (
  query: string,
): Promise<Movie[]> => {
  if (!query.trim()) {
    return [];
  }

  const response = await apiClient.get<MovieResponse>(
    MOVIE_ENDPOINTS.SEARCH,
    {
      params: { query: query.trim() },
    },
  );

  return response.data.results ?? [];
};
