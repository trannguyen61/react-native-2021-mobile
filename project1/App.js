import React from 'react';
import { Text, View } from 'react-native';
import Styles from './Styles'
import Timer from './Timer'
import Controller from './Controller'
import TimeSetter from './TimeSetter'
import vibrate from './utils/vibrate'

const DEFAULT_WORK_TIME = 25
const DEFAULT_REST_TIME = 5

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      workTime: DEFAULT_WORK_TIME * 60,
      restTime: DEFAULT_REST_TIME * 60,
      time: DEFAULT_WORK_TIME * 60,
      isWorking: true,
      isPaused: false
    }
  }

  componentWillUnmount () {
    this.clearTimerID()
  }

  clearTimerID () {
    clearInterval(this.timerID)
  }

  onStartTimer = () => {
    this.timerID = setInterval(() => {
      this.calcTime()
      this.checkSwitchStatus()
    }, 1000)
  }

  onToggleTimer = () => {
    this.setState(prevState => ({
      ...prevState,
      isPaused: !prevState.isPaused
    }))
  }

  onResetTimer = () => {
    this.setState(prevState => ({
      ...prevState,
      time: prevState.workTime,
      isPaused: false,
      isWorking: true
    }))
    this.clearTimerID()
  }

  onChangeTimeSetter = (isWorkingTime, time) => {
    this.setState(prevState => ({
      ...prevState,
      workTime: isWorkingTime ? time * 60 : prevState.workTime,
      restTime: !isWorkingTime ? time * 60 : prevState.restTime,
      time: (prevState.isWorking && isWorkingTime) || (!prevState.isWorking && !isWorkingTime) ? 
            time * 60 : prevState.time
    }))
  }

  calcTime () {
    if (!this.state.isPaused && this.state.time > 0) {
      this.setState(prevState => ({
        ...prevState,
        time: prevState.time - 1
      }))
    }
  }

  checkSwitchStatus () {
    if ( this.state.time == 0 ) {
      vibrate()
      this.setState(prevState => ({
        ...prevState,
        time: prevState.isWorking ? prevState.restTime : prevState.workTime,
        isWorking: !prevState.isWorking
      }))
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text>Work Timer</Text>
        <Timer isWorking={this.state.isWorking} time={this.state.time} />
        <Controller 
          isPaused={this.state.isPaused} 
          onStartTimer={this.onStartTimer} 
          onToggleTimer={this.onToggleTimer}
          onResetTimer={this.onResetTimer} 
        />
        <TimeSetter onChangeTimeSetter={this.onChangeTimeSetter} />
      </View>
    );
  }
}
