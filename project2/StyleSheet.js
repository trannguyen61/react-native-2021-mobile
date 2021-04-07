import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 5
      },
      text: {
        fontSize: 20
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      image: {
        height: 100,
        width: 70
      },
      bigImage: {
        height: 300,
        width: 'auto'
      },
      item: {
        marginBottom: 10
      },
      itemTitle: {
        fontSize: 20
      },
      itemInfo: {
        paddingHorizontal: 5,
        width: 650
      }
})