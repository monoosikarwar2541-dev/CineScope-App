import Config from 'react-native-config';

export const BASE_URL =
  Config.BASE_URL || 'https://api.themoviedb.org/3';

export const APP_ENV = Config.APP_ENV || 'dev';

export const TMDB_ACCESS_TOKEN =
  Config.TMDB_ACCESS_TOKEN || '';