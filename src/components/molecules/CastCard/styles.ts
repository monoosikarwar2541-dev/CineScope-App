
import { StyleSheet } from 'react-native';
import { ms, wp } from '@/utils/responsive';

export default StyleSheet.create({
  container: {
    width: wp(25),
    marginRight: wp(3),
    gap: ms(5),
  },
  avatar: {
    width: wp(23),
    aspectRatio: 1,
    borderRadius: wp(12),
    backgroundColor: '#252033',
  },
});
