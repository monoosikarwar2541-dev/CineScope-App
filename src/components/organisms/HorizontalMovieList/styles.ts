
import { StyleSheet } from 'react-native';
import { ms, wp } from '@/utils/responsive';

export const styles = StyleSheet.create({
  container: {
    marginTop: ms(24),
  },
  header: {
    paddingHorizontal: wp(5),
    marginBottom: ms(14),
  },
  listContent: {
    paddingHorizontal: wp(5),
  },
});
