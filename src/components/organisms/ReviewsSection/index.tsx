
import React, { memo } from 'react';
import { FlatList, View } from 'react-native';
import AppText from '@/components/atoms/AppText';
import ReviewCard, {
  type ReviewData,
} from '@/components/molecules/ReviewCard';
import { wp } from '@/utils/responsive';

function ReviewsSection({ reviews }: { reviews: ReviewData[] }) {
  if (!reviews.length) return null;

  return (
    <View style={{ marginTop: wp(6) }}>
      <View style={{ paddingHorizontal: wp(5), marginBottom: wp(4) }}>
        <AppText size={18} weight="700">Reviews</AppText>
      </View>

      <FlatList
        horizontal
        data={reviews}
        renderItem={({ item }) => <ReviewCard review={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: wp(5) }}
        initialNumToRender={3}
        windowSize={5}
      />
    </View>
  );
}

export default memo(ReviewsSection);
