
import React, { memo } from 'react';
import { View } from 'react-native';
import AppText from '@/components/atoms/AppText';
import styles from './styles';

function GenreChip({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <AppText size={12} color="#E5E7EB">
        {title}
      </AppText>
    </View>
  );
}

export default memo(GenreChip);
