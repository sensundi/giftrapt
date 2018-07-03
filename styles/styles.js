import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    bannerView: {
        flex:1,
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(82,144,59)'
    },
    inputView: {
        flex: 2,
        backgroundColor: 'rgb(255,255,255)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    loginView: {
        flex: 3,
        backgroundColor: 'rgb(255,255,255)',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    headerText: {
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 30,
        color: 'rgb(128,179,93)',
    },
    userInput: {
        color: 'gray',
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 5,
        height: 50,
        width: 260,
        borderColor: 'rgb(218,218,218)',
        textAlign: 'center',
    },
    ggButton: {
        marginBottom: 5,
        marginTop: 5,
        width: 260,
    alignItems: 'center',
        backgroundColor: 'rgb(75,146,49)'
    },
    fbButton: {
        marginBottom: 5,
        marginTop: 5,
        width: 260,
        alignItems: 'center',
        backgroundColor: 'rgb(43,76,186)'
    },
    gButton: {
        marginBottom: 5,
        marginTop: 5,
        width: 260,
        alignItems: 'center',
        backgroundColor: 'rgb(197,45,33)'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    },
    universalFont: {
        fontFamily: 'HelveticaNeue-Bold'
    }
});

export {styles};