
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
} from 'react';

import {
  ActivityIndicator,
  Linking,
  ScrollView,
  View,
} from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import AppText from '@/components/atoms/AppText';
import AppButton from '@/components/atoms/AppButton';

import MovieHero from '@/components/organisms/MovieHero';
import MovieOverview from '@/components/organisms/MovieOverview';
import CastSection from '@/components/organisms/CastSection';
import MovieGallery from '@/components/organisms/MovieGallery';
import WatchProviders from '@/components/organisms/WatchProviders';
import ReviewsSection from '@/components/organisms/ReviewsSection';
import HorizontalMovieList from '@/components/organisms/HorizontalMovieList';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import {
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieVideos,
  fetchMovieReviews,
  fetchMovieRecommendations,
  fetchSimilarMovies,
  fetchMovieImages,
  fetchMovieWatchProviders,
} from '@/redux/features/movie-details/movieDetailsThunk';

import {
  selectMovieDetails,
  selectMovieCredits,
  selectMovieVideos,
  selectMovieReviews,
  selectMovieRecommendations,
  selectSimilarMovies,
  selectMovieImages,
  selectMovieWatchProviders,
  selectMovieDetailsLoading,
  selectMovieDetailsError,
} from '@/redux/features/movie-details/movieDetailsSelectors';

import type { Movie, MovieListItem } from '@/redux/features/movie/movieTypes';
import type { RootStackParamList } from '@/navigation/types';

import styles from './styles';

type ScreenRoute = RouteProp<RootStackParamList, 'MovieDetails'>;
type Navigation = NativeStackNavigationProp<RootStackParamList>;

function MovieDetailsScreen() {
  const route = useRoute<ScreenRoute>();
  const navigation = useNavigation<Navigation>();
  const dispatch = useAppDispatch();

  const { movieId } = route.params;

  const details = useAppSelector(selectMovieDetails);
  const credits = useAppSelector(selectMovieCredits);
  const videos = useAppSelector(selectMovieVideos);
  const reviews = useAppSelector(selectMovieReviews);
  const recommendations = useAppSelector(selectMovieRecommendations);
  const similar = useAppSelector(selectSimilarMovies);
  const images = useAppSelector(selectMovieImages);
  const watchProviders = useAppSelector(selectMovieWatchProviders);
  const loading = useAppSelector(selectMovieDetailsLoading);
  const error = useAppSelector(selectMovieDetailsError);

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
    dispatch(fetchMovieCredits(movieId));
    dispatch(fetchMovieVideos(movieId));
    dispatch(fetchMovieReviews(movieId));
    dispatch(fetchMovieRecommendations(movieId));
    dispatch(fetchSimilarMovies(movieId));
    dispatch(fetchMovieImages(movieId));
    dispatch(fetchMovieWatchProviders(movieId));
  }, [dispatch, movieId]);

  // Prevent showing the previous movie during navigation.
  const currentMovie =
    details?.id === movieId ? details : null;

  const cast = useMemo(
    () => credits?.cast?.slice(0, 15) ?? [],
    [credits?.cast],
  );

  const movieImages = useMemo(
    () => images?.backdrops?.slice(0, 12) ?? [],
    [images?.backdrops],
  );

  // These selectors are assumed to return arrays.
  const reviewItems = useMemo(
    () => reviews?.slice(0, 10) ?? [],
    [reviews],
  );

  const recommendationItems = useMemo(
    () => recommendations?.slice(0, 15) ?? [],
    [recommendations],
  );

  const similarItems = useMemo(
    () => similar?.slice(0, 15) ?? [],
    [similar],
  );

  const trailer = useMemo(
    () =>
      videos?.find(
        video =>
          video.site === 'YouTube' &&
          video.type === 'Trailer' &&
          video.official,
      ) ??
      videos?.find(
        video =>
          video.site === 'YouTube' &&
          video.type === 'Trailer',
      ),
    [videos],
  );

  const handleBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('App');
    }
  }, [navigation]);

  const handleTrailer = useCallback(() => {
    if (!trailer?.key) return;

    const url = `https://www.youtube.com/watch?v=${trailer.key}`;

    Linking.openURL(url).catch(() => {
      // Optionally show an error message to the user.
    });
  }, [trailer]);

const handleMoviePress = useCallback(
  (movie: MovieListItem) => {
    navigation.push('MovieDetails', {
      movieId: movie.id,
    });
  },
  [navigation],
);

  if (loading && !currentMovie) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#A78BFA" />
        <AppText size={13} color="#C4BED3">
          Loading movie details...
        </AppText>
      </View>
    );
  }

  if (!currentMovie) {
    return (
      <View style={styles.centered}>
        <AppText
          size={16}
          weight="700"
          style={styles.errorText}
        >
          {error || 'Movie details could not be loaded.'}
        </AppText>

        <AppButton
          title="Go Back"
          onPress={handleBack}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <MovieHero
          title={currentMovie.title}
          backdropPath={currentMovie.backdrop_path}
          rating={currentMovie.vote_average}
          releaseDate={currentMovie.release_date}
          onBack={handleBack}
          onTrailer={handleTrailer}
        />

        <MovieOverview
          title={currentMovie.title}
          overview={currentMovie.overview}
          tagline={currentMovie.tagline}
          posterPath={currentMovie.poster_path}
          genres={currentMovie.genres}
          status={currentMovie.status}
          language={currentMovie.original_language}
          budget={currentMovie.budget}
          revenue={currentMovie.revenue}
          runtime={currentMovie.runtime}
        />

        <CastSection cast={cast} />

        <MovieGallery images={movieImages} />

        <WatchProviders
          providers={watchProviders?.IN?.flatrate ?? []}
        />

        <ReviewsSection reviews={reviewItems} />

        <HorizontalMovieList
          title="Recommended Movies"
          movies={recommendationItems}
          onMoviePress={handleMoviePress}
        />

        <HorizontalMovieList
          title="Similar Movies"
          movies={similarItems}
          onMoviePress={handleMoviePress}
        />
      </ScrollView>
    </View>
  );
}

export default memo(MovieDetailsScreen);
