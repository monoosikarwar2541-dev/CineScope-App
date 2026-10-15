
import { apiClient } from '@/api';


import type { Movie } from '@/redux/features/discover/discoverTypes';
import type {
  SearchMoviesParams,
  DiscoverMoviesParams,
} from './searchTypes';

import { MOVIE_ENDPOINTS } from '@/api/endpoints/movie';

interface MovieResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

// Popular Movies API
export const getPopularMoviesAPI = async (): Promise<Movie[]> => {
  const response = await apiClient.get<MovieResponse>(
    MOVIE_ENDPOINTS.POPULAR,
  );

  return response.data.results ?? [];
};

// Search Movies API
export const searchMoviesAPI = async ({
  query,
  page = 1,
}: SearchMoviesParams): Promise<Movie[]> => {
  const response = await apiClient.get<MovieResponse>(
    MOVIE_ENDPOINTS.SEARCH,
    {
      params: {
        query: query.trim(),
        page,
        include_adult: false,
      },
    },
  );

  return response.data.results ?? [];
};

// Discover Movies by Genre API
export const discoverMoviesByGenreAPI = async ({
  genreId,
  page = 1,
}: DiscoverMoviesParams): Promise<Movie[]> => {
  const response = await apiClient.get<MovieResponse>(
    MOVIE_ENDPOINTS.DISCOVER,
    {
      params: {
        with_genres: genreId,
        sort_by: 'popularity.desc',
        page,
        include_adult: false,
      },
    },
  );

  return response.data.results ?? [];
};
