
import React, { memo } from 'react';
import {
  Text,
  type TextProps,
  type TextStyle,
} from 'react-native';

import { rf } from '@/utils/responsive';

type AppTextProps = TextProps & {
  children: React.ReactNode;
  size?: number;
  color?: string;
  weight?: TextStyle['fontWeight'];
  lines?: number;
};

function AppText({
  children,
  size = 14,
  color = '#FFFFFF',
  weight = '400',
  lines,
  style,
  ...rest
}: AppTextProps) {
  return (
    <Text
      {...rest}
      numberOfLines={lines}
      style={[
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
}

export default memo(AppText);
