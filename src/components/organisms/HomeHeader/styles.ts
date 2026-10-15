import { COLORS } from '@/constants/colors';
import { hp, wp } from '@/utils/responsive';
import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: hp(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(1),
    backgroundColor: COLORS.background,
  },
});