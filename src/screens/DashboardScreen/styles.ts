
import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants/colors';
import { ms, wp } from '@/utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingHorizontal: wp(3.2),
    paddingTop: ms(8),
    paddingBottom: ms(24),
    gap: ms(15),
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: ms(3),
  },
  separator: {
    width: ms(10),
  },
  loader: {
    paddingVertical: ms(30),
  },
});
