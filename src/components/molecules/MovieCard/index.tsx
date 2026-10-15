
import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { Star } from 'lucide-react-native';

import AppText from '@/components/atoms/AppText';
import { COLORS } from '@/constants/colors';
import { wp } from '@/utils/responsive';



import { styles } from './styles';
import { Movie } from '@/redux/features/movie/movieTypes';
import { getImageUrl } from '@/redux/features/movie/movieService';


interface Props {
  movie: Movie;
  onPress?: (movie: Movie) => void;
}

const MovieCard: React.FC<Props> = ({ movie, onPress }) => {
  const poster = getImageUrl(movie.poster_path, 'w342');
  const year = movie.release_date?.slice(0, 4) || 'N/A';

  return (
    <Pressable
      style={styles.container}
      onPress={() => onPress?.(movie)}
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
          <AppText size={12} color={COLORS.secondaryText}>
            No poster
          </AppText>
        </View>
      )}

      <AppText size={12} weight="700" numberOfLines={1}>
        {movie.title}
      </AppText>

      <AppText size={11} color={COLORS.secondaryText}>
        {year}
      </AppText>

      <View style={styles.rating}>
        <Star size={12} color={COLORS.star} fill={COLORS.star} />
        <AppText size={11} color={COLORS.secondaryText}>
          {Number(movie.vote_average ?? 0).toFixed(1)}
        </AppText>
      </View>
    </Pressable>
  );
};

export default MovieCard;
