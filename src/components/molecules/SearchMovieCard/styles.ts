import { StyleSheet } from 'react-native';
import { rf, ms } from '@/utils/responsive';

export const styles = StyleSheet.create({
  container: {
    marginBottom: ms(18),
  },
  poster: {
    width: '100%',
    aspectRatio: 0.67,
    borderRadius: ms(10),
    backgroundColor: '#172536',
  },
  noPoster: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noPosterText: {
    color: '#A7B0C0',
    fontSize: rf(11),
  },
  title: {
    color: '#FFFFFF',
    fontSize: rf(12),
    fontWeight: '700',
    marginTop: ms(7),
  },
  year: {
    color: '#9AA6B7',
    fontSize: rf(11),
    marginTop: ms(3),
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: ms(4),
    marginTop: ms(4),
  },
  ratingText: {
    color: '#D6DCE6',
    fontSize: rf(11),
  },
});