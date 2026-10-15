
import React, { memo } from 'react';
import { FlatList, View } from 'react-native';
import AppImage from '@/components/atoms/AppImage';
import AppText from '@/components/atoms/AppText';
import { getImageUrl } from '@/redux/features/discover/discoverService';
import { ms, wp } from '@/utils/responsive';

function MovieGallery({
  images,
}: {
  images: { file_path: string; width?: number; height?: number }[];
}) {
  if (!images.length) return null;

  return (
    <View style={{ marginTop: wp(6) }}>
      <View style={{ paddingHorizontal: wp(5), marginBottom: wp(4) }}>
        <AppText size={18} weight="700">Photos</AppText>
      </View>

      <FlatList
        horizontal
        data={images}
        keyExtractor={(item, index) => `${item.file_path}-${index}`}
        renderItem={({ item }) => (
          <AppImage
            uri={getImageUrl(item.file_path, 'w500')}
            style={{
              width: wp(65),
              aspectRatio: 16 / 9,
              borderRadius: ms(12),
              marginRight: wp(3),
              backgroundColor: '#252033',
            }}
          />
        )}
        contentContainerStyle={{ paddingHorizontal: wp(5) }}
        showsHorizontalScrollIndicator={false}
        initialNumToRender={3}
        windowSize={5}
      />
    </View>
  );
}

export default memo(MovieGallery);
