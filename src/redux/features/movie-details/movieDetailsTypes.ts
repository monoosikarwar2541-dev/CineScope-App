export type MovieDetails = {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  tagline: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  vote_count: number;
  release_date: string;
  runtime: number | null;

  // Add these two properties
  budget: number;
  revenue: number;

  genres: Array<{
    id: number;
    name: string;
  }>;
  status: string;
  original_language: string;
  adult: boolean;
};

export type MoviePerson = {
  id: number;
  name: string;
  character?: string;
  job?: string;
  department?: string;
  profile_path: string | null;
};

export type MovieCredits = {
  cast: MoviePerson[];
  crew: MoviePerson[];
};

export type MovieVideo = {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
  published_at?: string;
};

export type MovieReview = {
  id: string;
  author: string;
  content: string;
  url: string;
  created_at: string;
  author_details: {
    name: string;
    username: string;
    rating: number | null;
    avatar_path: string | null;
  };
};

export type MovieListItem = {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date: string;
  overview?: string;
};

export type MovieImage = {
  file_path: string;
  width: number;
  height: number;
  vote_average: number;
};

export type MovieImages = {
  backdrops: MovieImage[];
  posters: MovieImage[];
  logos: MovieImage[];
};

export type WatchProvider = {
  provider_id: number;
  provider_name: string;
  logo_path: string;
  display_priority: number;
};

export type WatchProviderRegion = {
  link?: string;
  flatrate?: WatchProvider[];
  rent?: WatchProvider[];
  buy?: WatchProvider[];
  free?: WatchProvider[];
  ads?: WatchProvider[];
};

export type MovieWatchProviders = {
  [regionCode: string]: WatchProviderRegion;
};

export type MovieDetailsState = {
  details: MovieDetails | null;
  credits: MovieCredits | null;
  videos: MovieVideo[];
  reviews: MovieReview[];
  recommendations: MovieListItem[];
  similar: MovieListItem[];
  images: MovieImages | null;
  watchProviders: MovieWatchProviders | null;

  loading: {
    details: boolean;
    credits: boolean;
    videos: boolean;
    reviews: boolean;
    recommendations: boolean;
    similar: boolean;
    images: boolean;
    watchProviders: boolean;
  };

  errors: {
    details: string | null;
    credits: string | null;
    videos: string | null;
    reviews: string | null;
    recommendations: string | null;
    similar: string | null;
    images: string | null;
    watchProviders: string | null;
  };
};
