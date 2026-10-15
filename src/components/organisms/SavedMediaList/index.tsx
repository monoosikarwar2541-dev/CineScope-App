import React from 'react';
import { FlatList, Text, View } from 'react-native';

import SavedMediaRow from '@/components/molecules/SavedMediaRow';

import styles from './styles';
import { SavedMedia } from '@/redux/features/SavedMedia/savedMediaType';

interface Props {
  items: SavedMedia[];
  hydrated: boolean;
  onRemove: (item: SavedMedia) => void;
  mediaLabel: string;
}

const SavedMediaList = ({
  items,
  hydrated,
  onRemove,
  mediaLabel,
}: Props) => {
  if (!hydrated) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.message}>Loading your saved list...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <SavedMediaRow item={item} onRemove={onRemove} />
      )}
      keyExtractor={item => `${item.mediaType}-${item.id}`}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.listContent,
        items.length === 0 && styles.emptyList,
      ]}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.title}>Your list is empty</Text>
          <Text style={styles.message}>
            No saved {mediaLabel.toLowerCase()} yet. Explore and add your
            favourites to My List.
          </Text>
        </View>
      }
    />
  );
};

export default SavedMediaList;