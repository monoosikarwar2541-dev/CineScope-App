import { StyleSheet } from 'react-native';
import { wp, hp, rf, ms } from '@/utils/responsive';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#06111D',
  },
  content: {
    flex: 1,
    paddingHorizontal: wp(5),
    paddingTop: hp(2),
  },
  heading: {
    color: '#FFFFFF',
    fontSize: rf(27),
    fontWeight: '800',
    marginBottom: hp(2.2),
  },
  genreContainer: {
    marginTop: hp(1.6),
    marginBottom: hp(2.5),
  },
  resultsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: ms(16),
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: rf(17),
    fontWeight: '700',
  },
  loadingText: {
    color: '#A993FF',
    fontSize: rf(12),
  },
});