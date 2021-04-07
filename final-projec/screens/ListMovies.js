import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import MovieResult from './MovieResult';

import Styles from '../styles/app'

const renderItem = ({ item }) => {
  return <MovieResult movie={item} />;
};

const ListMovies = (props) => (
  <FlatList
    style={Styles.list}
    renderItem={renderItem}
    data={props.movies}
    keyExtractor={(movie) => movie.imdbID}
    onEndReachedThreshold={0.7}
    onEndReached={props.loadMoreMovies}
  />
);

ListMovies.propTypes = {
  movies: PropTypes.array,
};

export default ListMovies;