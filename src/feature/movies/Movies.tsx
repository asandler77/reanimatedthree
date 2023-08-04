import React from 'react';
import {FlatList, View} from 'react-native';
import {MovieModel} from './model';
import {Movie} from './Movie';

interface Props {
  movies: MovieModel[];
  onSelectCB: (movie: MovieModel) => void;
}

export const Movies = (props: Props) => {
  const {movies, onSelectCB} = props;

  return (
    <View>
      <FlatList
        data={movies}
        renderItem={({item}) => <Movie movie={item} onSelectCB={onSelectCB} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
