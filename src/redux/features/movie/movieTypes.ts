
export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count?: number;
  genre_ids?: number[];
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieState {
  trending: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
  searchResults: Movie[];

  loading: {
    trending: boolean;
    popular: boolean;
    topRated: boolean;
    upcoming: boolean;
  };

  searchLoading: boolean;
  error: string | null;
}
