
import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch } from '@/redux/store';
import type { RootStackParamList } from '@/navigation/types';

import HomeHeader from '@/components/organisms/HomeHeader';
import FeaturedMovie from '@/components/organisms/FeaturedMovie';
import SearchBar from '@/components/atoms/SearchBar';
import AppText from '@/components/atoms/AppText';
import MovieCard from '@/components/molecules/MovieCard';
import CategoryTabs, {
  type MovieCategory,
} from '@/components/molecules/CategoryTabs';

import { COLORS } from '@/constants/colors';






import { styles } from './styles';
import { selectMovieState, selectPopularMovies, selectSearchResults, selectTopRatedMovies, selectTrendingMovies, selectUpcomingMovies } from '@/redux/features/movie/movieSelectors';
import { fetchMoviesBySearch, fetchPopularMovies, fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '@/redux/features/movie/movieThunk';
import { clearSearchResults } from '@/redux/features/movie/movieSlice';

type NavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const DashboardScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch<AppDispatch>();

  const [category, setCategory] =
    React.useState<MovieCategory>('Trending');

  const [query, setQuery] = React.useState('');

  // Redux state
  const trending = useSelector(selectTrendingMovies);
  const popular = useSelector(selectPopularMovies);
  const topRated = useSelector(selectTopRatedMovies);
  const upcoming = useSelector(selectUpcomingMovies);
  const searchResults = useSelector(selectSearchResults);
  const movieState = useSelector(selectMovieState);

  // Initial API calls
  useEffect(() => {
    dispatch(fetchTrendingMovies());
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  // Search and category API calls
  useEffect(() => {
    const trimmedQuery = query.trim();

    if (trimmedQuery) {
      const timer = setTimeout(() => {
        dispatch(fetchMoviesBySearch(trimmedQuery));
      }, 400);

      return () => clearTimeout(timer);
    }

    dispatch(clearSearchResults());

    if (category === 'Top Rated') {
      dispatch(fetchTopRatedMovies());
    } else if (category === 'Upcoming') {
      dispatch(fetchUpcomingMovies());
    }
  }, [query, category, dispatch]);

  // Select the list to display
  const movies = query.trim()
    ? searchResults
    : category === 'Trending'
      ? trending
      : category === 'Popular'
        ? popular
        : category === 'Top Rated'
          ? topRated
          : upcoming;

  const loading = query.trim()
    ? movieState.searchLoading
    : category === 'Trending'
      ? movieState.loading.trending
      : category === 'Popular'
        ? movieState.loading.popular
        : category === 'Top Rated'
          ? movieState.loading.topRated
          : movieState.loading.upcoming;

  const error = movieState.error;
  const featuredMovie = trending[0];

  const openMovie = (movie: (typeof trending)[number]) => {
    navigation.navigate('MovieDetails', {
      movieId: movie.id,
    });
  };

  const openWatchlist = () => {
    navigation.navigate('Watchlist');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.content}
      >
        <HomeHeader onSavedPress={openWatchlist} />

        <SearchBar
          value={query}
          onChangeText={setQuery}
        />

        {!query.trim() && (
          <CategoryTabs
            selected={category}
            onSelect={setCategory}
          />
        )}

        {!query.trim() && featuredMovie && (
          <FeaturedMovie
            movie={featuredMovie}
            onPress={openMovie}
          />
        )}

        <View style={styles.sectionHeader}>
          <AppText size={17} weight="800">
            {query.trim()
              ? 'Search Results'
              : `${category} Movies`}
          </AppText>

          {!query.trim() && (
            <AppText
              size={12}
              color={COLORS.primaryLight}
              onPress={() => setCategory('Popular')}
            >
              See All
            </AppText>
          )}
        </View>

        {loading ? (
          <ActivityIndicator
            color={COLORS.primary}
            size="large"
            style={styles.loader}
          />
        ) : error ? (
          <AppText color={COLORS.error}>
            {error}
          </AppText>
        ) : movies.length === 0 ? (
          <AppText color={COLORS.secondaryText}>
            No movies found.
          </AppText>
        ) : (
          <FlatList
            horizontal
            data={movies}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <MovieCard
                movie={item}
                onPress={openMovie}
              />
            )}
            ItemSeparatorComponent={() => (
              <View style={styles.separator} />
            )}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled
          />
        )}
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;
