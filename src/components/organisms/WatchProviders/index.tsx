
import React, { memo } from 'react';
import { FlatList, View } from 'react-native';
import AppImage from '@/components/atoms/AppImage';
import AppText from '@/components/atoms/AppText';
import { wp, ms } from '@/utils/responsive';

type Provider = {
  provider_id: number;
  provider_name: string;
  logo_path: string;
};

function WatchProviders({
  providers,
}: {
  providers: Provider[];
}) {
  if (!providers.length) return null;

  return (
    <View style={{ marginTop: wp(6) }}>
      <View style={{ paddingHorizontal: wp(5), marginBottom: wp(4) }}>
        <AppText size={18} weight="700">
          Where to Watch (India)
        </AppText>
      </View>

      <FlatList
        horizontal
        data={providers}
        keyExtractor={(item) => String(item.provider_id)}
        renderItem={({ item }) => (
          <View
            style={{
              width: wp(22),
              alignItems: 'center',
              marginRight: wp(4),
              gap: ms(7),
            }}
          >
            <AppImage
              uri={`https://image.tmdb.org/t/p/w185${item.logo_path}`}
              style={{
                width: wp(15),
                aspectRatio: 1,
                borderRadius: ms(10),
              }}
            />
            <AppText size={11} color="#C4BED3" lines={2}>
              {item.provider_name}
            </AppText>
          </View>
        )}
        contentContainerStyle={{ paddingHorizontal: wp(5) }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default memo(WatchProviders);
