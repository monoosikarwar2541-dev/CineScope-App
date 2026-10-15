declare module 'react-native-config' {
  export interface NativeConfig {
    APP_ENV?: string;
    TMDB_BASE_URL?: string;
    TMDB_ACCESS_TOKEN?: string;
    [key: string]: string | undefined;
  }

  export const Config: NativeConfig;
  export default Config;
}
