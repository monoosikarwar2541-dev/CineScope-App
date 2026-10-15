import React from 'react';
import { View } from 'react-native';
import { Bookmark } from 'lucide-react-native';
import { styles } from './styles';
import AppLogo from '@/components/molecules/AppLogo';
import IconButton from '@/components/atoms/IconButton';
import { COLORS } from '@/constants/colors';




interface HomeHeaderProps {
  onLogoPress?: () => void;
  onSavedPress: () => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
  onLogoPress,
  onSavedPress,
}) => {
  return (
    <View style={styles.container}>
      <AppLogo size={22} onPress={onLogoPress} />

      <IconButton
        accessibilityLabel="Open saved movies"
        onPress={onSavedPress}
        icon={
          <Bookmark
            size={22}
            color={COLORS.text}
            strokeWidth={2}
          />
        }
      />
    </View>
  );
};

export default HomeHeader;