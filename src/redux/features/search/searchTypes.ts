import type { Movie } from '@/redux/features/discover/discoverTypes';

export interface SearchState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  query: string;
  selectedGenreId: number | null;
}

export interface SearchMoviesParams {
  query: string;
  page?: number;
}

export interface DiscoverMoviesParams {
  genreId: number;
  page?: number;
}