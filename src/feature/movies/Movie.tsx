import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MovieModel} from './model';

interface Props {
  movie: MovieModel;
  onSelectCB: (movie: MovieModel) => void;
}

export const Movie = (props: Props) => {
  const {movie, onSelectCB} = props;
  const onPress = () => {
    onSelectCB(movie);
  };
  return (
    <View style={styles.movie}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>{movie.name}</Text>
        <Text style={styles.title}>{movie.score}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  movie: {
    borderWidth: 1,
    height: 80,
    width: 250,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});
