
import React from 'react';
import {
  ImageBackground,
  Pressable,
  View,
} from 'react-native';
import { Play } from 'lucide-react-native';

import AppText from '@/components/atoms/AppText';
import { COLORS } from '@/constants/colors';

import { styles } from './styles';
import { Movie } from '@/redux/features/movie/movieTypes';
import { getImageUrl } from '@/redux/features/movie/movieService';

interface Props {
  movie: Movie;
  onPlayTrailer?: (movie: Movie) => void;
  onPress?: (movie: Movie) => void;
}

const FeaturedMovie: React.FC<Props> = ({
  movie,
  onPlayTrailer,
  onPress,
}) => {
  const backdrop = getImageUrl(movie.backdrop_path, 'w780');

  return (
    <Pressable
      style={styles.container}
      onPress={() => onPress?.(movie)}
    >
      <ImageBackground
        source={backdrop ? { uri: backdrop } : undefined}
        style={styles.image}
        imageStyle={styles.imageBorder}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <AppText size={18} weight="800" numberOfLines={2}>
            {movie.title}
          </AppText>

          <AppText size={12} color="#E2E5EB">
            {movie.release_date?.slice(0, 4) || 'Movie'} · ★{' '}
            {movie.vote_average.toFixed(1)}
          </AppText>

          <Pressable
            style={styles.playButton}
            onPress={(event) => {
              event.stopPropagation();
              onPlayTrailer?.(movie);
            }}
            accessibilityRole="button"
            accessibilityLabel={`Play trailer for ${movie.title}`}
          >
            <Play size={14} color={COLORS.text} fill={COLORS.text} />
            <AppText size={12} weight="700">Play Trailer</AppText>
          </Pressable>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default FeaturedMovie;
