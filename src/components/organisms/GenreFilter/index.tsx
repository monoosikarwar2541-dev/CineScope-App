import React, { memo } from 'react';
import { ScrollView } from 'react-native';

import GenreChip from '@/components/atoms/GenreChip';
import { styles } from './styles';

export interface GenreOption {
  label: string;
  id: number | null;
}

export const GENRES: GenreOption[] = [
  { label: 'All', id: null },
  { label: 'Action', id: 28 },
  { label: 'Comedy', id: 35 },
  { label: 'Drama', id: 18 },
  { label: 'Horror', id: 27 },
  { label: 'Romance', id: 10749 },
  { label: 'Sci-Fi', id: 878 },
];

interface Props {
  selected: string;
  onSelect: (genre: GenreOption) => void;
}

function GenreFilter({ selected, onSelect }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {GENRES.map(genre => (
        <GenreChip
          key={genre.label}
          label={genre.label}
          selected={selected === genre.label}
          onPress={() => onSelect(genre)}
        />
      ))}
    </ScrollView>
  );
}

export default memo(GenreFilter);