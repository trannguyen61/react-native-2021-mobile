import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import Styles from '../styles/app'

export default MovieResult = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={Styles.result}
      onPress={() => navigation.navigate('Details', { movie: props.movie })}
    >
      <Image style={Styles.image} source={{uri: props.movie.Poster}}></Image>
      <View style={Styles.resultText}>
        <Text>{props.movie.Title}</Text>
        <Text>{props.movie.Year}</Text>
      </View>
    </TouchableOpacity>
  );
};

MovieResult.propTypes = {
  movie: PropTypes.object,
};