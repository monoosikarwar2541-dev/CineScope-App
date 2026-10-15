
import { StyleSheet } from 'react-native';
import { hp, ms, wp } from '@/utils/responsive';

export default StyleSheet.create({
  button: {
    minHeight: hp(5.5),
    paddingHorizontal: wp(5),
    borderRadius: ms(12),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7C3AED',
  },
  disabled: {
    opacity: 0.55,
  },
});
