
import React, { memo, useCallback } from 'react';
import {
  ImageBackground,
  Pressable,
  View,
} from 'react-native';
import AppText from '@/components/atoms/AppText';
import AppButton from '@/components/atoms/AppButton';
import { getImageUrl } from '@/redux/features/discover/discoverService';
import { hp, ms, wp } from '@/utils/responsive';
import styles from './styles';

type Props = {
  title: string;
  backdropPath?: string | null;
  rating?: number;
  releaseDate?: string;
  onBack: () => void;
  onTrailer: () => void;
};

function MovieHero({
  title,
  backdropPath,
  rating,
  releaseDate,
  onBack,
  onTrailer,
}: Props) {
  const handleBack = useCallback(() => onBack(), [onBack]);

  const backdrop = getImageUrl(backdropPath, 'w1280');

  return (
    <ImageBackground
      source={backdrop ? { uri: backdrop } : undefined}
      style={styles.hero}
      imageStyle={styles.image}
    >
      <View style={styles.overlay}>
        <Pressable
          onPress={handleBack}
          accessibilityRole="button"
          accessibilityLabel="Go back"
          style={styles.backButton}
        >
          <AppText size={24}>‹</AppText>
        </Pressable>

        <View style={styles.content}>
          <AppText size={27} weight="800" lines={3}>
            {title}
          </AppText>

          <View style={styles.metadata}>
            <AppText size={13} color="#FBBF24">
              ★ {rating?.toFixed(1) ?? 'N/A'}
            </AppText>
            {!!releaseDate && (
              <AppText size={13} color="#E5E7EB">
                {releaseDate.slice(0, 4)}
              </AppText>
            )}
          </View>

          <AppButton
            title="▶  Watch Trailer"
            onPress={onTrailer}
            style={styles.trailerButton}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

export default memo(MovieHero);
