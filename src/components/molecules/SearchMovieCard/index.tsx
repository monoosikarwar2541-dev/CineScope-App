import React, { memo } from 'react';
import {
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';
import { Star } from 'lucide-react-native';

import type { Movie } from '@/redux/features/discover/discoverTypes';
import { getImageUrl } from '@/redux/features/discover/discoverService';
import { styles } from './styles';

interface Props {
  movie: Movie;
  cardWidth: number;
  onPress: (movie: Movie) => void;
}

function SearchMovieCard({
  movie,
  cardWidth,
  onPress,
}: Props) {
  const poster = getImageUrl(movie.poster_path, 'w342');
  const year = movie.release_date?.slice(0, 4) || 'N/A';

  return (
    <Pressable
      style={[styles.container, { width: cardWidth }]}
      onPress={() => onPress(movie)}
      accessibilityRole="button"
      accessibilityLabel={`View ${movie.title}`}
    >
      {poster ? (
        <Image
          source={{ uri: poster }}
          style={styles.poster}
          resizeMode="cover"
        />
      ) : (
        <View style={[styles.poster, styles.noPoster]}>
          <Text style={styles.noPosterText}>
            No poster
          </Text>
        </View>
      )}

      <Text numberOfLines={1} style={styles.title}>
        {movie.title}
      </Text>

      <Text style={styles.year}>{year}</Text>

      <View style={styles.rating}>
        <Star
          size={12}
          color="#FFC857"
          fill="#FFC857"
        />
        <Text style={styles.ratingText}>
          {Number(movie.vote_average ?? 0).toFixed(1)}
        </Text>
      </View>
    </Pressable>
  );
}

export default memo(SearchMovieCard);