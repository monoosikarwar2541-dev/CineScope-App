
import React, { memo } from 'react';
import { View } from 'react-native';
import AppText from '@/components/atoms/AppText';
import styles from './styles';

function MovieInfoRow({
  label,
  value,
}: {
  label: string;
  value?: string | number | null;
}) {
  if (value === undefined || value === null || value === '') {
    return null;
  }

  return (
    <View style={styles.row}>
      <AppText size={12} color="#A8A2B8">
        {label}
      </AppText>
      <AppText size={12} weight="600" style={styles.value}>
        {String(value)}
      </AppText>
    </View>
  );
}

export default memo(MovieInfoRow);
