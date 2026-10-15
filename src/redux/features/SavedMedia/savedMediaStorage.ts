import AsyncStorage from '@react-native-async-storage/async-storage';
import { SavedMedia } from './savedMediaType';


const STORAGE_KEY = '@cinescope/savedMedia';

export const loadSavedMedia = async (): Promise<SavedMedia[]> => {
  try {
    const storedValue = await AsyncStorage.getItem(STORAGE_KEY);

    if (!storedValue) {
      return [];
    }

    const parsedValue: unknown = JSON.parse(storedValue);

    if (!Array.isArray(parsedValue)) {
      return [];
    }

    return parsedValue.filter(
      (item): item is SavedMedia =>
        typeof item === 'object' &&
        item !== null &&
        typeof item.id === 'number' &&
        typeof item.title === 'string' &&
        (item.mediaType === 'movie' || item.mediaType === 'tv'),
    );
  } catch {
    return [];
  }
};

export const persistSavedMedia = async (
  items: SavedMedia[],
): Promise<void> => {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};