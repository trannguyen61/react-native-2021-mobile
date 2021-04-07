import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30
    },
    input: {
      borderWidth: 1,
      borderColor: 'pink',
      borderRadius: 8,
      padding: 10,
      width: '50%',
      marginBottom: 10,
      marginTop: 20
    },
    error: {
      color: 'red',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '50%',
      marginBottom: 40
    },
    list: {
      flex: 1,
      backgroundColor: 'lightgrey',
      width: '80%',
      marginBottom: 20
    },
    result: { padding: 20, flexDirection: 'row' },
    resultText: {
      marginLeft: 10,
      flex: 1
    },  
    image: {
      width: 50,
      height: 70
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 20
    },
    year: {
      marginBottom: 40,
      fontSize: 15
    },
    poster: {
      width: 200,
      height: 300,
      marginBottom: 20
    }
});
  