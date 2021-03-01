import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
    timer: {
        fontSize: 50,
    },
    timer__working: {
        color: '#0468BF'
    },
    timer__resting: {
        color: '#3B592D'
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    controller: {
        marginBottom: 10
    },
    textInput: {
        height: 30,
        borderColor: 'lightgray',
        borderWidth: 0.5,
        paddingLeft: 10,
        paddingRight: 10,
        minWidth: 40,
        marginRight: 10,
        marginBottom: 10
    }
})