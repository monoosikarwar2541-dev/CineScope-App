import { StyleSheet } from 'react-native';
import { ms, wp } from '@/utils/responsive';

export default StyleSheet.create({
  poster: {
    width: wp(15),
    height: ms(96),
    borderRadius: ms(7),
  },
  placeholder: {
    backgroundColor: '#172333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    color: '#94A3B8',
    fontSize: ms(10),
    textAlign: 'center',
  },
});