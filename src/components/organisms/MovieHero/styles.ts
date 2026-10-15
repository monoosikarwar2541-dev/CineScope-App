
import { StyleSheet } from 'react-native';
import { hp, ms, rf, wp } from '@/utils/responsive';

export default StyleSheet.create({
  hero: {
    width: '100%',
    height: hp(43),
    backgroundColor: '#201B2D',
  },
  image: {
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    paddingTop: hp(4),
    paddingBottom: hp(3),
    backgroundColor: 'rgba(10, 7, 20, 0.55)',
  },
  backButton: {
    width: wp(11),
    height: wp(11),
    borderRadius: wp(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(20, 16, 30, 0.8)',
  },
  content: {
    gap: ms(12),
  },
  metadata: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(5),
  },
  trailerButton: {
    alignSelf: 'flex-start',
    minWidth: wp(48),
  },
});
