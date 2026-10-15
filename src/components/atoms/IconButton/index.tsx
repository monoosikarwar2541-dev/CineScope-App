import React from 'react';
import { Pressable } from 'react-native';
import type { ReactNode } from 'react';

import { styles } from './styles';

interface IconButtonProps {
  icon: ReactNode;
  onPress: () => void;
  accessibilityLabel: string;
  size?: number;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  accessibilityLabel,
  size,
}) => {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      hitSlop={8}
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        size ? { width: size, height: size } : undefined,
        pressed && styles.pressed,
      ]}
    >
      {icon}
    </Pressable>
  );
};

export default IconButton;