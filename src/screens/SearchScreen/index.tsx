
import React, { useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  Pressable,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import { Search, X, Star } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import {
  setSearchQuery,
  setSelectedGenre,
  clearSearchError,
} from '@/redux/features/search/searchSlice';

import {
  fetchPopularMovies,
  fetchSearchMovies,
  fetchMoviesByGenre,
} from '@/redux/features/search/searchThunk';

import {
  selectSearchMovies,
  selectSearchLoading,
  selectSearchError,
  selectSearchQuery,
  selectSelectedGenreId,
} from '@/redux/features/search/searchSelectors';

import type { Movie } from '@/redux/features/discover/discoverTypes';

import type { RootStackParamList } from '@/navigation/types';

import { COLORS } from '@/constants/colors';
import { ms, rf, wp } from '@/utils/responsive';

import { getImageUrl } from '@/redux/features/discover/discoverService';
import styles from './styles';

const GENRES = [
  { label: 'All', id: null },
  { label: 'Action', id: 28 },
  { label: 'Comedy', id: 35 },
  { label: 'Drama', id: 18 },
  { label: 'Horror', id: 27 },
  { label: 'Romance', id: 10749 },
  { label: 'Sci-Fi', id: 878 },
];

const SearchScreen = () => {
  const dispatch = useAppDispatch();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const movies = useAppSelector(selectSearchMovies);
  const loading = useAppSelector(selectSearchLoading);
  const error = useAppSelector(selectSearchError);
  const query = useAppSelector(selectSearchQuery);
  const selectedGenreId = useAppSelector(selectSelectedGenreId);

  // Debounce movie search.
 useEffect(() => {
  const normalizedQuery = query.trim();

  const timer = setTimeout(() => {
    if (normalizedQuery.length === 0) {
      if (selectedGenreId !== null) {
        dispatch(fetchMoviesByGenre({ genreId: selectedGenreId }));
      } else {
        dispatch(fetchPopularMovies());
      }

      return;
    }

    // Search only after 2 characters
    if (normalizedQuery.length < 2) {
      return;
    }

    dispatch(
      fetchSearchMovies({
        query: normalizedQuery,
      }),
    );
  }, 350);

  return () => clearTimeout(timer);
}, [dispatch, query, selectedGenreId]);

  const handleSearchChange = useCallback(
    (value: string) => {
      dispatch(setSearchQuery(value));
    },
    [dispatch],
  );

  const handleClearSearch = useCallback(() => {
    dispatch(setSearchQuery(''));
    dispatch(clearSearchError());
    Keyboard.dismiss();
  }, [dispatch]);

  const handleGenreSelect = useCallback(
    (genreId: number | null) => {
      dispatch(setSelectedGenre(genreId));
    },
    [dispatch],
  );

  const handleMoviePress = useCallback(
    (movie: Movie) => {
      navigation.navigate('MovieDetails', {
        movieId: movie.id,
      });
    },
    [navigation],
  );

  const renderMovie = useCallback(
    ({ item }: { item: Movie }) => {
      const poster = getImageUrl(item.poster_path, 'w342');

      return (
        <Pressable
          style={styles.movieCard}
          onPress={() => handleMoviePress(item)}
        >
          {poster ? (
            <Image
              source={{ uri: poster }}
              style={styles.poster}
              resizeMode="cover"
            />
          ) : (
            <View style={[styles.poster, styles.noPoster]}>
              <Text style={styles.noPosterText}>No poster</Text>
            </View>
          )}

          <View style={styles.movieInfo}>
            <Text style={styles.movieTitle} numberOfLines={2}>
              {item.title}
            </Text>

            <Text style={styles.movieMeta}>
              {item.release_date?.slice(0, 4) || 'Year unavailable'}
            </Text>

            <View style={styles.ratingRow}>
              <Star
                size={ms(13)}
                color="#F5C518"
                fill="#F5C518"
              />
              <Text style={styles.rating}>
                {Number(item.vote_average ?? 0).toFixed(1)}
              </Text>
            </View>

            <Text style={styles.mediaLabel}>Movie</Text>
          </View>
        </Pressable>
      );
    },
    [handleMoviePress],
  );

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Search Movies</Text>

      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Search size={ms(19)} color={COLORS.muted} />

          <TextInput
            value={query}
            onChangeText={handleSearchChange}
            placeholder="Search movies..."
            placeholderTextColor={COLORS.muted}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
            accessibilityLabel="Search movies"
          />

          {query.length > 0 && (
            <Pressable onPress={handleClearSearch} hitSlop={10}>
              <X size={ms(19)} color={COLORS.muted} />
            </Pressable>
          )}
        </View>
      </View>

      <FlatList
        horizontal
        data={GENRES}
        keyExtractor={(item) => item.label}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.genreList}
        renderItem={({ item }) => {
          const selected = selectedGenreId === item.id;

          return (
            <Pressable
              style={[
                styles.genreChip,
                selected && styles.selectedGenreChip,
              ]}
              onPress={() => handleGenreSelect(item.id)}
            >
              <Text
                style={[
                  styles.genreText,
                  selected && styles.selectedGenreText,
                ]}
              >
                {item.label}
              </Text>
            </Pressable>
          );
        }}
      />

      <Text style={styles.resultsHeading}>
        {query.trim() ? 'Search Results' : 'Popular Movies'}
        {'  '}
        {!loading && `(${movies.length})`}
      </Text>

      {loading && query.trim().length >= 2 && movies.length === 0 ? (
        <View style={styles.center}>
          <ActivityIndicator
            size="large"
            color={COLORS.primaryLight}
          />
          <Text style={styles.statusText}>Searching movies...</Text>
        </View>
      ) : error && query.trim().length >= 2 && movies.length === 0 ? (
        <View style={styles.center}>
          <Text style={styles.statusText}>{error}</Text>
          <Pressable
            style={styles.retryButton}
            onPress={() => {
              dispatch(clearSearchError());

              if (query.trim()) {
                dispatch(fetchSearchMovies({ query: query.trim() }));
              } else if (selectedGenreId !== null) {
                dispatch(fetchMoviesByGenre({ genreId: selectedGenreId }));
              } else {
                dispatch(fetchPopularMovies());
              }
            }}
          >
            <Text style={styles.retryText}>Try Again</Text>
          </Pressable>
        </View>
      ) : movies.length === 0 ? (
        <View style={styles.center}>
          <Text style={styles.statusText}>No movies found.</Text>
          <Text style={styles.helperText}>
            Try another movie title.
          </Text>
        </View>
      ) : (
        <FlatList
          data={movies}
          renderItem={renderMovie}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.movieList}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          initialNumToRender={8}
          maxToRenderPerBatch={8}
          windowSize={7}
          removeClippedSubviews
        />
      )}
    </View>
  );
};

export default SearchScreen;
