
import React from 'react';
import { ScrollView, Pressable } from 'react-native';

import AppText from '@/components/atoms/AppText';
import { COLORS } from '@/constants/colors';
import { styles } from './styles';

export type MovieCategory =
  | 'Trending'
  | 'Popular'
  | 'Top Rated'
  | 'Upcoming';

const CATEGORIES: MovieCategory[] = [
  'Trending',
  'Popular',
  'Top Rated',
  'Upcoming',
];

interface Props {
  selected: MovieCategory;
  onSelect: (category: MovieCategory) => void;
}

const CategoryTabs: React.FC<Props> = ({
  selected,
  onSelect,
}) => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.content}
  >
    {CATEGORIES.map((category) => {
      const active = selected === category;

      return (
        <Pressable
          key={category}
          onPress={() => onSelect(category)}
          style={[
            styles.tab,
            active && styles.activeTab,
          ]}
          accessibilityRole="button"
          accessibilityState={{ selected: active }}
        >
          <AppText
            size={12}
            weight="600"
            color={active ? COLORS.text : COLORS.secondaryText}
          >
            {category}
          </AppText>
        </Pressable>
      );
    })}
  </ScrollView>
);

export default CategoryTabs;
