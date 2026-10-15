import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { EllipsisVertical, Star } from 'lucide-react-native';

import MoviePoster from '@/components/atoms/MoviePoster';

import { ms } from '@/utils/responsive';

import styles from './styles';
import { SavedMedia } from '@/redux/features/SavedMedia/savedMediaType';

interface Props {
  item: SavedMedia;
  onRemove: (item: SavedMedia) => void;
}

const SavedMediaRow = ({ item, onRemove }: Props) => {
  const year = item.release_date?.slice(0, 4) || 'Year unavailable';

  return (
    <View style={styles.row}>
      <MoviePoster posterPath={item.poster_path} />

      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>

        <Text style={styles.meta}>
          {year} · {item.mediaType === 'movie' ? 'Movie' : 'TV Show'}
        </Text>

        <View style={styles.ratingRow}>
          <Star size={ms(13)} color="#F5C518" fill="#F5C518" />
          <Text style={styles.rating}>
            {Number(item.vote_average ?? 0).toFixed(1)}
          </Text>
        </View>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Remove ${item.title} from My List`}
        hitSlop={12}
        onPress={() => onRemove(item)}
        style={styles.action}
      >
        <EllipsisVertical size={ms(21)} color="#8492A8" />
      </Pressable>
    </View>
  );
};

export default SavedMediaRow;