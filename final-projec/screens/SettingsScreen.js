import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';

import Styles from '../styles/app'

class SettingsScreen extends React.Component {
  componentDidUpdate () {
    if (!this.props.token) {
        this.props.navigation.navigate('Login')
    }
  }

  render () {
    return (
        <View style={Styles.container}>
            <Button color="pink" title="Log out" onPress={this.props.logout}/>
        </View>
      )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch({ type: 'LOGOUT' })
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)