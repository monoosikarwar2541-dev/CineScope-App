
import React from 'react';
import { View, TextInput } from 'react-native';
import { Search } from 'lucide-react-native';

import { COLORS } from '@/constants/colors';
import { styles } from './styles';


interface Props {
  value: string;
  onChangeText: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChangeText }) => (
  <View style={styles.container}>
    <Search size={19} color={COLORS.secondaryText} />

    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder="Search movies, shows..."
      placeholderTextColor={COLORS.secondaryText}
      style={styles.input}
      selectionColor={COLORS.primary}
      returnKeyType="search"
      accessibilityLabel="Search movies and shows"
      autoCorrect={false}
    />
  </View>
);

export default SearchBar;
