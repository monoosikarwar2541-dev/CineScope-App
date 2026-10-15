import { StyleSheet } from 'react-native';
import { wp, hp, rf, ms } from '@/utils/responsive';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: hp(6),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(3.5),
    borderRadius: ms(15),
    backgroundColor: '#142131',
    gap: wp(2.5),
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: rf(14),
    paddingVertical: hp(1.2),
  },
});