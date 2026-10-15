
import React, { memo } from 'react';
import { View } from 'react-native';
import AppText from '@/components/atoms/AppText';
import styles from './styles';

export type ReviewData = {
  id: string;
  author: string;
  content: string;
  author_details?: {
    rating?: number | null;
  };
};

function ReviewCard({ review }: { review: ReviewData }) {
  return (
    <View style={styles.card}>
      <AppText size={14} weight="700">
        {review.author}
      </AppText>
      {review.author_details?.rating != null && (
        <AppText size={12} color="#FBBF24">
          ★ {review.author_details.rating}/10
        </AppText>
      )}
      <AppText size={12} color="#C4BED3" lines={5}>
        {review.content.trim() || 'No review text available.'}
      </AppText>
    </View>
  );
}

export default memo(ReviewCard);
