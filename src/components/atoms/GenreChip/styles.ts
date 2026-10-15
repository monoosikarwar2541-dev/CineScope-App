
// import { StyleSheet } from 'react-native';
// import { ms, wp } from '@/utils/responsive';

// export default StyleSheet.create({
//   container: {
//     paddingHorizontal: wp(3),
//     paddingVertical: ms(7),
//     marginRight: wp(2),
//     marginBottom: ms(8),
//     borderRadius: ms(20),
//     backgroundColor: '#29243A',
//     borderWidth: 1,
//     borderColor: '#403653',
//   },
// });

import { StyleSheet } from 'react-native';
import { wp, hp, rf, ms } from '@/utils/responsive';

export const styles = StyleSheet.create({
  chip: {
    minHeight: hp(4.2),
    paddingHorizontal: wp(4),
    borderRadius: ms(12),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#142131',
    borderWidth: 1,
    borderColor: '#1C2B3D',
  },
  selectedChip: {
    backgroundColor: '#7957FF',
    borderColor: '#7957FF',
  },
  label: {
    color: '#B7C0CF',
    fontSize: rf(12),
    fontWeight: '600',
  },
  selectedLabel: {
    color: '#FFFFFF',
  },
});