import React from 'react'
import { Text, TextInput, View, Button } from 'react-native'
import { connect } from 'react-redux';

import Styles from '../styles/app'
import { onLogin } from '../redux/actions'

class LoginScreen extends React.Component {
    state = {
        username: '',
        password: ''
    }

    login = () => {
        this.props.onLogin(this.state.username, this.state.password)
    }

    handleUsernameChange = (username) => {
        this.setState({username})
    }

    handlePasswordChange = (password) => {
        this.setState({password})
    }

    componentDidUpdate () {
        if (this.props.token) {
            this.props.navigation.navigate('Main Tabs')
        }
    }

    render() {
        return (
            <View style={Styles.container}>
                {this.props.loginErr ? (<Text style={Styles.error}>{this.props.loginErr}</Text>) : null}
                <TextInput
                style={Styles.input}
                placeholder="Username"
                value={this.state.username}
                onChangeText={this.handleUsernameChange}
                />
                <TextInput
                style={Styles.input}
                placeholder="Password"
                value={this.state.password}
                onChangeText={this.handlePasswordChange}
                secureTextEntry={true}
                />
                <Button color='pink' title="Log in" onPress={this.login} />
                
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    loginErr: state.auth.loginErr
});

export default connect(mapStateToProps, { onLogin })(LoginScreen)