import React from 'react'
import { View, Button } from 'react-native'
import Styles from './Styles'

export default class Controller extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        let pauseTitle = this.props.isPaused ? 'Resume' : 'Stop'

        return (
            <View style={[Styles.controller, Styles.flexRow]}>
                <Button title="Start" onPress={this.props.onStartTimer}/>
                <Button title={pauseTitle} onPress={this.props.onToggleTimer} />
                <Button title="Reset" onPress={this.props.onResetTimer} />
            </View>
        )
    }
}