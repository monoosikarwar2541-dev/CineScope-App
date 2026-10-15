import React from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { Search, X } from 'lucide-react-native';
import { styles } from './styles';

interface Props {
  value: string;
  onChangeText: (value: string) => void;
}

export default function SearchInput({
  value,
  onChangeText,
}: Props) {
  return (
    <View style={styles.container}>
      <Search size={20} color="#A7B0C0" />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search movies..."
        placeholderTextColor="#8A94A5"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
        accessibilityLabel="Search movies"
      />

      {value.length > 0 && (
        <Pressable
          onPress={() => onChangeText('')}
          hitSlop={10}
          accessibilityRole="button"
          accessibilityLabel="Clear search"
        >
          <X size={19} color="#A7B0C0" />
        </Pressable>
      )}
    </View>
  );
}