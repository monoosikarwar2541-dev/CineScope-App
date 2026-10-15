import React from 'react';
import { Pressable, View } from 'react-native';
import { styles } from './styles';
import AppText from '@/components/atoms/AppText';







interface AppLogoProps {
  size?: number;
  onPress?: () => void;
}

const AppLogo: React.FC<AppLogoProps> = ({
  size = 22,
  onPress,
}) => {
  const logo = (
    <View style={styles.container}>
      <AppText size={size} weight="900">
        Cine
      </AppText>

      <AppText size={size} weight="900" color="#8952FF">
        Scope
      </AppText>
    </View>
  );

  if (!onPress) {
    return logo;
  }

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="CineScope Home"
      onPress={onPress}
    >
      {logo}
    </Pressable>
  );
};

export default AppLogo;