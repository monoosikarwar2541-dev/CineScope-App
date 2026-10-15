
import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants/colors';
import { ms, wp } from '@/utils/responsive';

export const styles = StyleSheet.create({
  content: {
    gap: ms(9),
    paddingVertical: ms(4),
    paddingRight: wp(3),
  },
  tab: {
    minHeight: ms(30),
    paddingHorizontal: ms(12),
    borderRadius: ms(11),
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: COLORS.primary,
  },
});
