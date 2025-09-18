import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        padding: 15,
        backgroundColor: '#4f3ac9',
        borderRadius: 23,
        paddingLeft: 20,
        paddingRight: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textInput: {
        borderColor : "#4f3ac9",
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 23,
        width: '50%',
        paddingLeft: 30,
        paddingRight: 30,
        margin: 15,
    },
    label: {
        fontWeight: 'bold',
        position: 'absolute',
        left: 40    
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
    },
    icon: {
        position: 'absolute',
        right: 40 
    },
    iconLeft: {
        position: 'absolute',
        left: 40 
    }
})