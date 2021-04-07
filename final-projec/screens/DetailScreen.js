import React from 'react';
import { Text, View, Image } from 'react-native';

import Styles from '../styles/app'

export default DetailScreen = ({ route }) => (
  <View style={Styles.container}>
    <Image
      style={Styles.poster}
      source={{
        uri: route.params.movie.Poster
      }}
    />
    <Text style={Styles.title}>{route.params.movie.Title}</Text>
    <Text style={Styles.year}>Released in: {route.params.movie.Year}</Text>
  </View>
)