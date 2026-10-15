
import React, { memo } from 'react';
import {
  Image,
  type ImageProps,
} from 'react-native';

type AppImageProps = Omit<ImageProps, 'source'> & {
  uri?: string | null;
  fallback?: string;
};

function AppImage({
  uri,
  fallback,
  style,
  ...rest
}: AppImageProps) {
  const imageUri = uri || fallback;

  if (!imageUri) return null;

  return (
    <Image
      {...rest}
      source={{ uri: imageUri }}
      style={style}
      resizeMode={rest.resizeMode ?? 'cover'}
    />
  );
}

export default memo(AppImage);
