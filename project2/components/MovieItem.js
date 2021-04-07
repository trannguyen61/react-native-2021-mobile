import React from 'react'
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Styles from '../StyleSheet'

export default class MovieItem extends React.Component { 
    render () {
        const item = this.props.item

        return (
            <TouchableOpacity onPress={() => this.props.onItemPress(item)}>
                <Image style={Styles.image} source={{uri: item['Poster']}}/>
                <Text>{item['Title']}</Text>
                <Text>{item['Director']}</Text>
                <Text>{item['Year']}</Text>
            </TouchableOpacity>
        )
    }
}

MovieItem.propTypes = {
    item: PropTypes.object.isRequired,
    itemPress: PropTypes.func
}
