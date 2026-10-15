
import { StyleSheet } from 'react-native';
import { ms } from '@/utils/responsive';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: ms(12),
    marginBottom: ms(12),
  },
  value: {
    flex: 1,
    textAlign: 'right',
  },
});
