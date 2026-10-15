import { StyleSheet } from 'react-native';
import { ms, wp } from '@/utils/responsive';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: ms(8),
    paddingHorizontal: wp(4),
    marginTop: ms(18),
    marginBottom: ms(12),
  },
  tab: {
    minWidth: wp(25),
    paddingHorizontal: ms(18),
    paddingVertical: ms(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ms(24),
    backgroundColor: '#101C2B',
  },
  activeTab: {
    backgroundColor: '#7447F5',
  },
  label: {
    color: '#94A3B8',
    fontSize: ms(12),
    fontWeight: '600',
  },
  activeLabel: {
    color: '#FFFFFF',
  },
});