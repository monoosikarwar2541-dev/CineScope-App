import React, { useEffect, useMemo, useState } from 'react';
import {  Text } from 'react-native';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';


import styles from './styles';
import { selectSavedMediaHydrated, selectSavedMediaItems } from '@/redux/features/SavedMedia/savedMediaSelectors';
import { loadSavedMedia, persistSavedMedia } from '@/redux/features/SavedMedia/savedMediaStorage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SavedMedia, SavedMediaType } from '@/redux/features/SavedMedia/savedMediaType';
import { removeSavedMedia, setSavedMedia } from '@/redux/features/SavedMedia/savedMediaSlice';
import SavedMediaTabs from '@/components/molecules/SavedMediaTabs';
import SavedMediaList from '@/components/organisms/SavedMediaList';

const SavedMediaScreen = () => {
  const dispatch = useAppDispatch();

  const savedItems = useAppSelector(selectSavedMediaItems);
  const hydrated = useAppSelector(selectSavedMediaHydrated);

  const [selectedType, setSelectedType] =
    useState<SavedMediaType>('movie');

  // Load saved items once when the screen mounts.
  useEffect(() => {
    let mounted = true;

    const hydrate = async () => {
      const items = await loadSavedMedia();

      if (mounted) {
        dispatch(setSavedMedia(items));
      }
    };

    void hydrate();

    return () => {
      mounted = false;
    };
  }, [dispatch]);

  // Persist every saved-list update after initial hydration.
  useEffect(() => {
    if (!hydrated) {
      return;
    }

    void persistSavedMedia(savedItems).catch(error => {
      console.warn('Could not persist saved media:', error);
    });
  }, [savedItems, hydrated]);

  const filteredItems = useMemo(
    () =>
      savedItems.filter(item => item.mediaType === selectedType),
    [savedItems, selectedType],
  );

  const handleRemove = (item: SavedMedia) => {
    dispatch(
      removeSavedMedia({
        id: item.id,
        mediaType: item.mediaType,
      }),
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.heading}>My List</Text>

      <SavedMediaTabs
        selected={selectedType}
        onChange={setSelectedType}
      />

      <SavedMediaList
        items={filteredItems}
        hydrated={hydrated}
        onRemove={handleRemove}
        mediaLabel={selectedType === 'movie' ? 'Movies' : 'TV Shows'}
      />
    </SafeAreaView>
  );
};

export default SavedMediaScreen;