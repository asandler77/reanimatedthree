import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Movies} from './Movies';
import {MovieOverview} from './MovieOverview';
import {MovieModel} from './model';

const movies: MovieModel[] = [
  {id: '1', name: 'Chapaev', score: 4},
  {id: '2', name: 'Cobra', score: 2},
  {id: '3', name: 'Commando', score: 1},
  {id: '4', name: 'Predator', score: 3},
];

export const MainScreen = () => {
  const [selectedMovie, setSelectedMovie] = useState<MovieModel>(movies[0]);

  const onSelectCB = (movie: MovieModel) => {
    setSelectedMovie(movie);
  };
  return (
    <SafeAreaView style={styles.movies}>
      <MovieOverview movie={selectedMovie} />
      <Movies movies={movies} onSelectCB={onSelectCB} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  movies: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
