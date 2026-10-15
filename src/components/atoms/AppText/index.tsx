import React from 'react';
import { Text } from 'react-native';
import type { TextProps } from 'react-native';



import { styles } from './styles';
import { COLORS } from '@/constants/colors';
import { rf } from '@/utils/responsive';


type FontWeight = '400' | '500' | '600' | '700' | '800' | '900';

interface AppTextProps extends TextProps {
  children: React.ReactNode;
  size?: number;
  color?: string;
  weight?: FontWeight;
}

const AppText: React.FC<AppTextProps> = ({
  children,
  size = 14,
  color = COLORS.text,
  weight = '400',
  style,
  ...props
}) => {
  return (
    <Text
      {...props}
      style={[
        styles.text,
        {
          fontSize: rf(size),
          color,
          fontWeight: weight,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default AppText;