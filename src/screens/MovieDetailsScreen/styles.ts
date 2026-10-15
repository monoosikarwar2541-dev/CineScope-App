
import { StyleSheet } from 'react-native';
import { hp, ms, wp } from '@/utils/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#100D19',
  },
  content: {
    paddingBottom: hp(5),
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(6),
  },
  errorText: {
    marginBottom: ms(16),
    textAlign: 'center',
  },
});
