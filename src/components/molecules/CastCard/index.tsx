
import React, { memo } from 'react';
import { View } from 'react-native';
import AppImage from '@/components/atoms/AppImage';
import AppText from '@/components/atoms/AppText';
import { getImageUrl } from '@/redux/features/movie/movieService';
import styles from './styles';

type CastMember = {
  id: number;
  name: string;
  character?: string;
  profile_path?: string | null;
};

function CastCard({ person }: { person: CastMember }) {
  return (
    <View style={styles.container}>
      <AppImage
        uri={getImageUrl(person.profile_path, 'w185')}
        style={styles.avatar}
      />
      <AppText size={12} weight="600" lines={2}>
        {person.name}
      </AppText>
      <AppText size={11} color="#A8A2B8" lines={2}>
        {person.character || 'Cast'}
      </AppText>
    </View>
  );
}

export default memo(CastCard);
