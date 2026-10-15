import { StyleSheet } from 'react-native';
import { ms, wp } from '@/utils/responsive';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: ms(10),
    paddingHorizontal: wp(4),
    gap: wp(3),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#172333',
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    gap: ms(5),
  },
  title: {
    color: '#FFFFFF',
    fontSize: ms(14),
    fontWeight: '700',
  },
  meta: {
    color: '#8492A8',
    fontSize: ms(11),
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: ms(4),
  },
  rating: {
    color: '#D8DEE9',
    fontSize: ms(11),
  },
  action: {
    padding: ms(5),
  },
});