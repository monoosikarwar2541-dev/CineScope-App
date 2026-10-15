
import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants/colors';
import { ms, rf, wp } from '@/utils/responsive';

const CARD_WIDTH = wp(28);

export const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    gap: ms(4),
  },
  poster: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 1.48,
    borderRadius: ms(9),
    backgroundColor: COLORS.card,
    marginBottom: ms(3),
  },
  noPoster: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: ms(4),
  },
});
