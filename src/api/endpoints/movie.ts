
export const MOVIE_ENDPOINTS = {
  // Movie Lists
  TRENDING: '/trending/movie/day',
  POPULAR: '/movie/popular',
  TOP_RATED: '/movie/top_rated',
  UPCOMING: '/movie/upcoming',
  NOW_PLAYING: '/movie/now_playing',

  // Search Movies
  SEARCH: '/search/movie',
  DISCOVER: '/discover/movie',
  GET_GENRES: '/genre/movie/list',

  // Movies Details
  GET_BY_ID: (id: number) =>
    `/movie/${id}`,

  GET_CREDITS: (id: number) =>
    `/movie/${id}/credits`,

  GET_VIDEOS: (id: number) =>
    `/movie/${id}/videos`,

  GET_REVIEWS: (id: number) =>
    `/movie/${id}/reviews`,

  GET_RECOMMENDATIONS: (id: number) =>
    `/movie/${id}/recommendations`,

  GET_SIMILAR: (id: number) =>
    `/movie/${id}/similar`,

  GET_IMAGES: (id: number) =>
    `/movie/${id}/images`,

  GET_WATCH_PROVIDERS: (id: number) =>
    `/movie/${id}/watch/providers`,

  // Discover & Genres
  // DISCOVER: '/discover/movie',
  // GET_GENRES: '/genre/movie/list',
} as const;
