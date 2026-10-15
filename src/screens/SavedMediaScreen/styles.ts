import { StyleSheet } from 'react-native';
import { ms, wp } from '@/utils/responsive';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#050D18',
  },
  heading: {
    color: '#FFFFFF',
    fontSize: ms(23),
    fontWeight: '800',
    paddingHorizontal: wp(4),
    paddingTop: ms(12),
  },
});