import React from 'react';
import { Pressable, Text, View } from 'react-native';


import styles from './styles';
import { SavedMediaType } from '@/redux/features/SavedMedia/savedMediaType';

interface Props {
  selected: SavedMediaType;
  onChange: (type: SavedMediaType) => void;
}

const SavedMediaTabs = ({ selected, onChange }: Props) => (
  <View style={styles.container}>
    <Pressable
      accessibilityRole="tab"
      accessibilityState={{ selected: selected === 'movie' }}
      onPress={() => onChange('movie')}
      style={[styles.tab, selected === 'movie' && styles.activeTab]}
    >
      <Text
        style={[styles.label, selected === 'movie' && styles.activeLabel]}
      >
        Movies
      </Text>
    </Pressable>

    <Pressable
      accessibilityRole="tab"
      accessibilityState={{ selected: selected === 'tv' }}
      onPress={() => onChange('tv')}
      style={[styles.tab, selected === 'tv' && styles.activeTab]}
    >
      <Text
        style={[styles.label, selected === 'tv' && styles.activeLabel]}
      >
        TV Shows
      </Text>
    </Pressable>
  </View>
);

export default SavedMediaTabs;