import React from 'react'
import { FlatList } from 'react-native'

import MovieItem from '../components/MovieItem'

import { movie } from '../mockData'

export default class MovieListScreen extends React.Component {
    onItemPress = (item) => {
        this.props.navigation.navigate('Movie Detail', {item})
    }

    renderItem = ({item}) => {
        return <MovieItem item={item} onItemPress={this.onItemPress}/>
    }

    render () {
        return (
            <FlatList data={[movie]} keyExtractor={item => item['imdbID']} renderItem={this.renderItem}></FlatList>
        )
    }
}