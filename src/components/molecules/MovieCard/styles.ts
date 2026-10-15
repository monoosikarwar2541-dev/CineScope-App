
// import { StyleSheet } from 'react-native';

// import { COLORS } from '@/constants/colors';
// import { ms, rf, wp } from '@/utils/responsive';

// const CARD_WIDTH = wp(28);

// export const styles = StyleSheet.create({
//   container: {
//     width: CARD_WIDTH,
//     gap: ms(4),
//   },
//   poster: {
//     width: CARD_WIDTH,
//     height: CARD_WIDTH * 1.48,
//     borderRadius: ms(9),
//     backgroundColor: COLORS.card,
//     marginBottom: ms(3),
//   },
//   noPoster: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   rating: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: ms(4),
//   },
// });

import { StyleSheet } from 'react-native';
import { ms, wp } from '@/utils/responsive';
import { COLORS } from '@/constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: wp(35),
    marginRight: wp(3),
    gap: ms(6),
  },

  poster: {
    width: '100%',
    aspectRatio: 2 / 3,
    borderRadius: ms(12),
    backgroundColor: '#252033',
  },

  noPoster: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: ms(5),
  },
});

