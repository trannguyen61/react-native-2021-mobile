import React from 'react'
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native'

import MovieItem from '../components/MovieItem'
import Styles from '../StyleSheet'

import { search } from '../mockData'

export default class SearchScreen extends React.Component {
    state = {
        search: "",
        searchItem: []
    }

    search = () => {
        const result = search['Search'].filter(e => e['Title'].includes(this.state.search))
        this.setState({searchItem: result})
    }

    onItemPress = (item) => {
        this.props.navigation.navigate('Movie Detail', {item})
    }

    renderItem = ({item}) => {
        return <MovieItem item={item} onItemPress={this.onItemPress}/>
    }

    render () {
        return (
            <View style={Styles.container}>
                <Text>Search here</Text>
                <TextInput 
                    style={Styles.input}
                    placeholder="Search" 
                    value={this.state.search} 
                    onChangeText={text => this.setState({search: text})}
                    onSubmitEditing={this.search} 
                />
                <FlatList data={this.state.searchItem} keyExtractor={item => item['imdbID']} renderItem={this.renderItem}></FlatList>

            </View>
        )
    }
}