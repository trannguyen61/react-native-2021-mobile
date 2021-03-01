import React from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Styles from './Styles'

export default class Timer extends React.Component {
    static propTypes = {
        time: PropTypes.number.isRequired,
        isWorking: PropTypes.bool.isRequired
    }
    
    constructor (props) {
        super(props)
    }

    getMinute () {
        return Math.floor(this.props.time / 60)
    }

    getSecond () {
        return this.props.time % 60
    }

    render () {
        const { timer, timer__working, timer__resting } = Styles
        let timerStyle = this.props.isWorking ? 
          StyleSheet.flatten([timer, timer__working]) : 
          StyleSheet.flatten([timer, timer__resting])
    
        return (
            <Text style={timerStyle}>
                { this.getMinute() < 10 ? `0${this.getMinute()}` : this.getMinute() }
                :
                { this.getSecond() < 10 ? `0${this.getSecond()}` : this.getSecond() }
            </Text>
        )
    }
}