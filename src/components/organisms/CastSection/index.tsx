
import React, { memo } from 'react';
import { FlatList, View } from 'react-native';
import AppText from '@/components/atoms/AppText';
import CastCard from '@/components/molecules/CastCard';
import { wp } from '@/utils/responsive';

type Person = {
  id: number;
  name: string;
  character?: string;
  profile_path?: string | null;
};

function CastSection({ cast }: { cast: Person[] }) {
  if (!cast.length) return null;

  return (
    <View style={{ marginTop: wp(6) }}>
      <View style={{ paddingHorizontal: wp(5), marginBottom: wp(4) }}>
        <AppText size={18} weight="700">Top Cast</AppText>
      </View>

      <FlatList
        horizontal
        data={cast}
        renderItem={({ item }) => <CastCard person={item} />}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: wp(5) }}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={5}
      />
    </View>
  );
}

export default memo(CastSection);
