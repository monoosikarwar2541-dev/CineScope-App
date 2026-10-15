import React, { memo, useCallback } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

import type { Movie } from '@/redux/features/discover/discoverTypes';
import SearchMovieCard from '@/components/molecules/SearchMovieCard';
import { wp, hp, rf } from '@/utils/responsive';

interface Props {
  movies: Movie[];
  loading: boolean;
  query: string;
  error: string;
  onRetry: () => void;
  onMoviePress: (movie: Movie) => void;
}

function SearchMovieGrid({
  movies,
  loading,
  query,
  error,
  onRetry,
  onMoviePress,
}: Props) {
  const { width } = useWindowDimensions();

  const columns = width >= 600 ? 4 : 3;
  const horizontalPadding = wp(5);
  const gap = wp(3);

  const cardWidth =
    (width -
      horizontalPadding * 2 -
      gap * (columns - 1)) /
    columns;

  const renderItem = useCallback(
    ({ item }: { item: Movie }) => (
      <SearchMovieCard
        movie={item}
        cardWidth={cardWidth}
        onPress={onMoviePress}
      />
    ),
    [cardWidth, onMoviePress],
  );

  const keyExtractor = useCallback(
    (item: Movie) => String(item.id),
    [],
  );

  if (loading && movies.length === 0) {
    return (
      <View style={{ paddingVertical: hp(4) }}>
        <ActivityIndicator color="#8A6BFF" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ alignItems: 'center', paddingVertical: hp(4) }}>
        <Text style={{ color: '#FF9292', fontSize: rf(14) }}>
          {error}
        </Text>
        <Text
          onPress={onRetry}
          style={{
            color: '#A993FF',
            marginTop: hp(1.5),
            fontWeight: '700',
          }}
        >
          Try again
        </Text>
      </View>
    );
  }

  if (movies.length === 0) {
    return (
      <View style={{ alignItems: 'center', paddingVertical: hp(4) }}>
        <Text style={{ color: '#FFFFFF', fontSize: rf(16) }}>
          {query ? 'No movies found' : 'No movies available'}
        </Text>
        <Text style={{ color: '#9AA6B7', marginTop: hp(1) }}>
          Try another search or genre.
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      key={`grid-${columns}`}
      data={movies}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={columns}
      columnWrapperStyle={{ gap }}
      contentContainerStyle={{
        paddingBottom: hp(2),
      }}
      showsVerticalScrollIndicator={false}
      initialNumToRender={9}
      maxToRenderPerBatch={9}
      windowSize={5}
      keyboardShouldPersistTaps="handled"
    />
  );
}

export default memo(SearchMovieGrid);