import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants/colors';
import { hp, ms, rf, wp } from '@/utils/responsive';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: hp(2),
  },

  heading: {
    color: COLORS.text,
    fontSize: rf(23),
    fontWeight: '800',
    paddingHorizontal: wp(4),
    marginBottom: ms(16),
  },

  searchRow: {
    paddingHorizontal: wp(4),
  },

  searchBox: {
    minHeight: ms(46),
    flexDirection: 'row',
    alignItems: 'center',
    gap: ms(10),
    paddingHorizontal: ms(13),
    borderRadius: ms(15),
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  input: {
    flex: 1,
    color: COLORS.text,
    fontSize: rf(14),
    paddingVertical: ms(10),
  },

  genreList: {
    paddingHorizontal: wp(4),
    paddingVertical: ms(14),
    gap: ms(8),
  },

  genreChip: {
    minHeight: ms(34),
    paddingHorizontal: ms(14),
    borderRadius: ms(12),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
  },

  selectedGenreChip: {
    backgroundColor: COLORS.primaryLight,
  },

  genreText: {
    color: COLORS.muted,
    fontSize: rf(12),
    fontWeight: '600',
  },

  selectedGenreText: {
    color: COLORS.background,
  },

  resultsHeading: {
    color: COLORS.text,
    fontSize: rf(14),
    fontWeight: '700',
    paddingHorizontal: wp(4),
    paddingBottom: ms(8),
  },

  movieList: {
    paddingHorizontal: wp(4),
    paddingBottom: ms(20),
  },

  movieCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: ms(8),
    gap: ms(12),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.border,
  },

  poster: {
    width: ms(78),
    height: ms(102),
    borderRadius: ms(8),
    backgroundColor: COLORS.surface,
  },

  noPoster: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  noPosterText: {
    color: COLORS.muted,
    fontSize: rf(10),
  },

  movieInfo: {
    flex: 1,
    justifyContent: 'center',
    gap: ms(6),
  },

  movieTitle: {
    color: COLORS.text,
    fontSize: rf(13),
    fontWeight: '700',
  },

  movieMeta: {
    color: COLORS.muted,
    fontSize: rf(11),
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: ms(4),
  },

  rating: {
    color: COLORS.text,
    fontSize: rf(11),
  },

  mediaLabel: {
    color: COLORS.muted,
    fontSize: rf(10),
    alignSelf: 'flex-start',
    backgroundColor: COLORS.surface,
    paddingHorizontal: ms(7),
    paddingVertical: ms(3),
    borderRadius: ms(5),
  },

  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(6),
    gap: ms(10),
  },

  statusText: {
    color: COLORS.text,
    fontSize: rf(13),
    textAlign: 'center',
  },

  helperText: {
    color: COLORS.muted,
    fontSize: rf(12),
    textAlign: 'center',
  },

  retryButton: {
    backgroundColor: COLORS.primaryLight,
    paddingHorizontal: ms(18),
    paddingVertical: ms(10),
    borderRadius: ms(10),
  },

  retryText: {
    color: COLORS.background,
    fontSize: rf(12),
    fontWeight: '700',
  },
});

export default styles;