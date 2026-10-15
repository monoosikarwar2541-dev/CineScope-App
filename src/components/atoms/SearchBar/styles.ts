
import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants/colors';
import { ms, rf, wp } from '@/utils/responsive';

export const styles = StyleSheet.create({
  container: {
    minHeight: ms(46),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: ms(10),
    paddingHorizontal: wp(3.5),
    borderRadius: ms(14),
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
  },
  input: {
    flex: 1,
    minWidth: 0,
    minHeight: ms(44),
    paddingVertical: ms(8),
    color: COLORS.text,
    fontSize: rf(13),
  },
});
