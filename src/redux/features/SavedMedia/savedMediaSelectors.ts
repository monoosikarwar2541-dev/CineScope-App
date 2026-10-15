import type { RootState } from '@/redux/store';
import { SavedMediaType } from './savedMediaType';


export const selectSavedMediaItems = (state: RootState) =>
  state.savedMedia.items;

export const selectSavedMediaHydrated = (state: RootState) =>
  state.savedMedia.hydrated;

export const selectSavedMovies = (state: RootState) =>
  state.savedMedia.items.filter(
    item => item.mediaType === 'movie',
  );

export const selectSavedTVShows = (state: RootState) =>
  state.savedMedia.items.filter(
    item => item.mediaType === 'tv',
  );

export const selectIsMediaSaved = (
  state: RootState,
  id: number,
  mediaType: SavedMediaType,
) =>
  state.savedMedia.items.some(
    item => item.id === id && item.mediaType === mediaType,
  );