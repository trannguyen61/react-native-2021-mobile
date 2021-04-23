import React from 'react'
import { Text, TextInput, View, Button, TouchableOpacity } from 'react-native'

import { CORRECT_USERNAME, CORRECT_PASSWORD } from '../consts'

import Styles from '../styles/app'

class RegisterScreen extends React.Component {
    state = {
        username: '',
        password: '',
        err: ''
    }

    register = () => {
        console.log('here')
        if (CORRECT_USERNAME.includes(this.state.username)) {
            console.log('duplicated')
            this.setState({err: 'Username has already existed.'})
            return
        }
        CORRECT_USERNAME.push(this.state.username)
        CORRECT_PASSWORD.push(this.state.password)
        this.setState({username: '', password: '', err: ''})
        this.navigateLogin()
    }

    navigateLogin = () => {
        this.props.navigation.navigate('Login')
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
                {this.state.err ? (<Text style={Styles.error}>{this.state.err}</Text>) : null}
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
                <Button color='pink' title="Register" onPress={this.register} />
                <TouchableOpacity style={Styles.registerButton}>
                    <Button color='purple' title="Already have an account?" onPress={this.navigateLogin}></Button>
                </TouchableOpacity>
            </View>
        )
    }
}

export default RegisterScreen