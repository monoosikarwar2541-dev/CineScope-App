import { COLORS } from '@/constants/colors';
import { ms } from '@/utils/responsive';
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    width: ms(40),
    height: ms(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ms(20),
  },

  pressed: {
    backgroundColor: COLORS.surface,
    opacity: 0.8,
  },
});