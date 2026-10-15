
import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants/colors';
import { hp, ms, wp } from '@/utils/responsive';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Math.min(hp(25), 240),
    borderRadius: ms(18),
    overflow: 'hidden',
    backgroundColor: COLORS.card,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: COLORS.card,
  },
  imageBorder: {
    borderRadius: ms(18),
  },
  content: {
    gap: ms(7),
    paddingHorizontal: wp(4),
    paddingVertical: ms(14),
    backgroundColor: 'rgba(0,0,0,0.50)',
  },
  playButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: ms(7),
    paddingHorizontal: ms(14),
    paddingVertical: ms(9),
    borderRadius: ms(22),
    backgroundColor: COLORS.primary,
    marginTop: ms(3),
  },
});
