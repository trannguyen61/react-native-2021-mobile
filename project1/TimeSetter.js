import React from 'react'
import { View, TextInput, Text } from 'react-native'
import Styles from './Styles'

export default TimeSetter = (props) => {
    return (
        <View>
            <Text>Custom your own clock:</Text>

            <Text>Work time</Text>
            <View style={Styles.flexRow}>
                <TextInput style={Styles.textInput} defaultValue="25" keyboardType="number-pad" onChangeText={text => props.onChangeTimeSetter(true, text)} />
                <Text> minutes</Text>
            </View>

            <Text>Rest time</Text>
            <View style={Styles.flexRow}>
                <TextInput style={Styles.textInput} defaultValue="5" keyboardType="number-pad" onChangeText={text => props.onChangeTimeSetter(false, text)} />
                <Text> minutes</Text>
            </View>
        </View>
    )
}