
import { StyleSheet } from 'react-native';
import { hp, ms, wp } from '@/utils/responsive';

export default StyleSheet.create({
  container: {
    paddingHorizontal: wp(5),
    paddingTop: hp(2.5),
    gap: ms(12),
  },
  top: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: wp(4),
  },
  poster: {
    width: wp(30),
    aspectRatio: 2 / 3,
    borderRadius: ms(12),
    backgroundColor: '#252033',
  },
  titleBlock: {
    flex: 1,
    gap: ms(9),
    paddingTop: ms(4),
  },
  genres: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: ms(4),
  },
  overview: {
    lineHeight: ms(22),
  },
  facts: {
    marginTop: ms(6),
    padding: wp(4),
    borderRadius: ms(12),
    backgroundColor: '#201B2D',
  },
});
