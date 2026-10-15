
// import React, { memo, useCallback } from 'react';
// import { FlatList, View } from 'react-native';
// import AppText from '@/components/atoms/AppText';
// import MovieCard, {
//   type MovieCardData,
// } from '@/components/molecules/MovieCard';
// import { getImageUrl } from '@/redux/features/movie/movieService';
// import { wp } from '@/utils/responsive';

// type Props = {
//   title: string;
//   movies: MovieCardData[];
//   // onMoviePress: (id: number) => void;
  
//   onMoviePress: (movie: Movie) => void;
// };

// function HorizontalMovieList({ title, movies, onMoviePress }: Props) {
//   const imageBaseUrl = useCallback(
//     (path: string | null | undefined, size?: string) =>
//       getImageUrl(path, size),
//     [],
//   );

//   if (!movies.length) return null;

//   return (
//     <View style={{ marginTop: wp(6) }}>
//       <View style={{ paddingHorizontal: wp(5), marginBottom: wp(4) }}>
//         <AppText size={18} weight="700">{title}</AppText>
//       </View>

//       <FlatList
//         horizontal
//         data={movies}
//         renderItem={({ item }) => (
//           <MovieCard
//             movie={item}
//             imageBaseUrl={imageBaseUrl}
//             onPress={onMoviePress}
//           />
//         )}
//         keyExtractor={(item) => String(item.id)}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={{ paddingHorizontal: wp(5) }}
//         initialNumToRender={4}
//         maxToRenderPerBatch={4}
//         windowSize={5}
//       />
//     </View>
//   );
// }

// export default memo(HorizontalMovieList);



import React, { memo, useCallback } from 'react';
import { FlatList, View } from 'react-native';

import AppText from '@/components/atoms/AppText';
import MovieCard from '@/components/molecules/MovieCard';
import type { MovieListItem } from '@/redux/features/discover/discoverTypes';

import { styles } from './styles';

type Props = {
  title: string;
  movies: MovieListItem[];
  onMoviePress: (movie: MovieListItem) => void;
};

function HorizontalMovieList({
  title,
  movies,
  onMoviePress,
}: Props) {
  const renderItem = useCallback(
    ({ item }: { item: MovieListItem }) => (
      <MovieCard
        movie={item}
        onPress={onMoviePress}
      />
    ),
    [onMoviePress],
  );

  const keyExtractor = useCallback(
    (item: MovieListItem) => String(item.id),
    [],
  );

  if (!movies.length) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText size={18} weight="700">
          {title}
        </AppText>
      </View>

      <FlatList
        horizontal
        data={movies}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        initialNumToRender={4}
        maxToRenderPerBatch={4}
        windowSize={5}
      />
    </View>
  );
}

export default memo(HorizontalMovieList);
