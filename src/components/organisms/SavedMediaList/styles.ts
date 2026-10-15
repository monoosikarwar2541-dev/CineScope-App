import { StyleSheet } from 'react-native';
import { ms, wp } from '@/utils/responsive';

export default StyleSheet.create({
  listContent: {
    paddingBottom: ms(24),
  },
  emptyList: {
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(8),
    paddingVertical: ms(32),
  },
  title: {
    color: '#FFFFFF',
    fontSize: ms(17),
    fontWeight: '700',
    textAlign: 'center',
  },
  message: {
    color: '#8492A8',
    fontSize: ms(13),
    lineHeight: ms(20),
    textAlign: 'center',
    marginTop: ms(8),
  },
});