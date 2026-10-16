
import Config from 'react-native-config';

export const APP_ENV = Config.APP_ENV || 'dev';

export const BASE_URL =
  Config.BASE_URL || 'https://api.themoviedb.org/3';

export const TMDB_ACCESS_TOKEN =
  Config.TMDB_ACCESS_TOKEN || '';
  console.log('[TMDB DEBUG]', {
  appEnv: APP_ENV,
  baseURL: BASE_URL,
  tokenLoaded: Boolean(TMDB_ACCESS_TOKEN),
  tokenLength: TMDB_ACCESS_TOKEN.length,
});