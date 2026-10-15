import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './styles';

interface Props {
  label?: string;
  title?: string;
  selected?: boolean;
  onPress?: () => void;
}

export default function GenreChip({
  label,
  title,
  selected = false,
  onPress,
}: Props) {
  const displayText = label || title || '';

  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
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
        {displayText}
      </Text>
    </Pressable>
  );
}
