
import React, { memo } from 'react';
import { View } from 'react-native';
import AppText from '@/components/atoms/AppText';
import AppImage from '@/components/atoms/AppImage';
import GenreChip from '@/components/atoms/GenreChip';
import MovieInfoRow from '@/components/molecules/MovieInfoRow';
import { getImageUrl } from '@/redux/features/movie/movieService';
import { ms } from '@/utils/responsive';
import styles from './styles';

type Props = {
  title: string;
  overview?: string;
  tagline?: string;
  posterPath?: string | null;
  genres?: { id: number; name: string }[];
  status?: string;
  language?: string;
  budget?: number;
  revenue?: number;
  runtime?: number | null;
};

const formatMoney = (value?: number) => {
  if (!value) return 'N/A';

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
};

function MovieOverview({
  title,
  overview,
  tagline,
  posterPath,
  genres = [],
  status,
  language,
  budget,
  revenue,
  runtime,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <AppImage
          uri={getImageUrl(posterPath, 'w342')}
          style={styles.poster}
          accessibilityLabel={`${title} poster`}
        />

        <View style={styles.titleBlock}>
          <AppText size={20} weight="800">
            {title}
          </AppText>
          {!!tagline && (
            <AppText size={12} color="#A8A2B8">
              “{tagline}”
            </AppText>
          )}
          {runtime != null && runtime > 0 && (
            <AppText size={12} color="#C4BED3">
              {runtime} minutes
            </AppText>
          )}
        </View>
      </View>

      {genres.length > 0 && (
        <View style={styles.genres}>
          {genres.map((genre) => (
            <GenreChip key={genre.id} title={genre.name} />
          ))}
        </View>
      )}

      <AppText size={17} weight="700">
        Overview
      </AppText>
      <AppText size={13} color="#C4BED3" style={styles.overview}>
        {overview || 'No overview available.'}
      </AppText>

      <View style={styles.facts}>
        <MovieInfoRow label="Status" value={status} />
        <MovieInfoRow label="Language" value={language?.toUpperCase()} />
        <MovieInfoRow label="Budget" value={formatMoney(budget)} />
        <MovieInfoRow label="Revenue" value={formatMoney(revenue)} />
      </View>
    </View>
  );
}

export default memo(MovieOverview);
