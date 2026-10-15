import React, { useCallback, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import SearchInput from '@/components/atoms/SearchInput';
import GenreFilter, {
  GENRES,
  type GenreOption,
} from '@/components/organisms/GenreFilter';
import SearchMovieGrid from '@/components/organisms/SearchMovieGrid';

import type { Movie } from '@/redux/features/discover/discoverTypes';
import type { AppTabParamList, RootStackParamList } from '@/navigation/types';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';


import {
  setSearchQuery,
  setSelectedGenre,
} from '@/redux/features/search/searchSlice';

import {
  fetchPopularMovies,
  fetchSearchMovies,
  fetchMoviesByGenre,
} from '@/redux/features/search/searchThunk';

import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { selectSearchError, selectSearchMovies, selectSearchQuery, selectSelectedGenreId } from '@/redux/features/search/searchSelectors';
import { selectSearchLoading } from '@/redux/features/discover/discoverSelectors';

type SearchNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<AppTabParamList, 'Search'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export default function SearchScreen() {
  const dispatch = useAppDispatch();

  const navigation = useNavigation<SearchNavigationProp>();

  const movies = useAppSelector(selectSearchMovies);
  const loading = useAppSelector(selectSearchLoading);
  const error = useAppSelector(selectSearchError);
  const query = useAppSelector(selectSearchQuery);
  const selectedGenreId = useAppSelector(selectSelectedGenreId);

  useEffect(() => {
    if (query.trim()) {
      return;
    }

    if (selectedGenreId !== null) {
      dispatch(fetchMoviesByGenre({ genreId: selectedGenreId }));
    } else {
      dispatch(fetchPopularMovies());
    }
  }, [dispatch, query, selectedGenreId]);

  useEffect(() => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    const timer = setTimeout(() => {
      dispatch(fetchSearchMovies({ query: trimmedQuery }));
    }, 350);

    return () => clearTimeout(timer);
  }, [dispatch, query]);

  const handleGenreSelect = useCallback(
    (genre: GenreOption) => {
      dispatch(setSelectedGenre(genre.id));
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

  const handleRetry = useCallback(() => {
    if (query.trim()) {
      dispatch(fetchSearchMovies({ query: query.trim() }));
    } else if (selectedGenreId !== null) {
      dispatch(fetchMoviesByGenre({ genreId: selectedGenreId }));
    } else {
      dispatch(fetchPopularMovies());
    }
  }, [dispatch, query, selectedGenreId]);

  const selectedGenre =
    GENRES.find(genre => genre.id === selectedGenreId)?.label ?? 'All';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <Text style={styles.heading}>Explore</Text>

        <SearchInput
          value={query}
          onChangeText={value => dispatch(setSearchQuery(value))}
        />

        <View style={styles.genreContainer}>
          <GenreFilter
            selected={selectedGenre}
            onSelect={handleGenreSelect}
          />
        </View>

        <View style={styles.resultsHeader}>
          <Text style={styles.sectionTitle}>
            {query.trim()
              ? 'Search Results'
              : selectedGenreId !== null
                ? selectedGenre
                : 'Popular Movies'}
          </Text>

          {loading && (
            <Text style={styles.loadingText}>Loading...</Text>
          )}
        </View>

        <SearchMovieGrid
          movies={movies}
          loading={loading}
          query={query}
          error={error ?? ''}
          onRetry={handleRetry}
          onMoviePress={handleMoviePress}
        />
      </View>
    </SafeAreaView>
  );
}