import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import PropTypes from 'prop-types'

import Styles from '../StyleSheet'

const winWidth = Dimensions.get('window').width

export default class MovieDetailScreen extends React.Component {
    render () {
        const item = this.props.route.params.item
        
        return (
            <View style={Styles.container}>
                <View>
                    <Image style={{aspectRatio: 1, width: winWidth * 0.4}} source={{uri: item['Poster']}}/>
                    <Text style={Styles.itemTitle}>{item['Title']}</Text>
                    <Text>{item['Director']}</Text>
                    <Text>{item['Year']}</Text>
                </View>
                <View>
                  <Text style={Styles.itemInfo}>{item['Plot']}</Text>
                </View>
            </View>
        )
    }
}
