import React from 'react';
import { Image, Text, View } from 'react-native';

import { getImageUrl } from '@/redux/features/discover/discoverService';
import styles from './styles';

interface MoviePosterProps {
  posterPath: string | null;
}

const MoviePoster = ({ posterPath }: MoviePosterProps) => {
  const imageUrl = getImageUrl(posterPath, 'w185');

  if (!imageUrl) {
    return (
      <View style={[styles.poster, styles.placeholder]}>
        <Text style={styles.placeholderText}>No poster</Text>
      </View>
    );
  }

  return (
    <Image
      source={{ uri: imageUrl }}
      style={styles.poster}
      resizeMode="cover"
    />
  );
};

export default MoviePoster;