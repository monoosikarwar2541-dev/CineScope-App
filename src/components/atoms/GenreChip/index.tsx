
// import React, { memo } from 'react';
// import { View } from 'react-native';
// import AppText from '@/components/atoms/AppText';
// import styles from './styles';

// function GenreChip({ title }: { title: string }) {
//   return (
//     <View style={styles.container}>
//       <AppText size={12} color="#E5E7EB">
//         {title}
//       </AppText>
//     </View>
//   );
// }

// export default memo(GenreChip);
import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './styles';

interface Props {
  label: string;
  selected: boolean;
  onPress: () => void;
}

export default function GenreChip({
  label,
  selected,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      style={[
        styles.chip,
        selected && styles.selectedChip,
      ]}
    >
      <Text
        style={[
          styles.label,
          selected && styles.selectedLabel,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}