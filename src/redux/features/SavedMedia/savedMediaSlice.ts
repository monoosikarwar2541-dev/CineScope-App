import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { SavedMedia, SavedMediaState, SavedMediaType } from './savedMediaType';






const initialState: SavedMediaState = {
  items: [],
  hydrated: false,
};

const savedMediaSlice = createSlice({
  name: 'savedMedia',
  initialState,
  reducers: {
    setSavedMedia: (state, action: PayloadAction<SavedMedia[]>) => {
      state.items = action.payload;
      state.hydrated = true;
    },

    toggleSavedMedia: (state, action: PayloadAction<SavedMedia>) => {
      const media = action.payload;

      const existingIndex = state.items.findIndex(
        item =>
          item.id === media.id &&
          item.mediaType === media.mediaType,
      );

      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else {
        state.items.push(media);
      }
    },

    removeSavedMedia: (
      state,
      action: PayloadAction<{
        id: number;
        mediaType: SavedMediaType;
      }>,
    ) => {
      state.items = state.items.filter(
        item =>
          !(
            item.id === action.payload.id &&
            item.mediaType === action.payload.mediaType
          ),
      );
    },

    clearSavedMedia: state => {
      state.items = [];
    },
  },
});

export const {
  setSavedMedia,
  toggleSavedMedia,
  removeSavedMedia,
  clearSavedMedia,
} = savedMediaSlice.actions;

export default savedMediaSlice.reducer;