import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    ViewAll: {
        flex: 1
    },
    searchBarContainerStyle: {
        backgroundColor: '#1ABC9C'
    },
    searchBarInputContainerStyle: {
        backgroundColor: '#1ABC9C'
    },
    searchBarInputStyle: {
        color: '#FFF'
    },
    viewTypes: {
        margin: 10
    },
    viewOrdenationFlatList: {
        flexDirection: 'row',
        justifyContent:
            'space-between',
        padding: 15
    },
    textOrdenationFlatList: {
        fontSize: 15,
        color: 'gray'
    },
    touchableOrdenationFlatList: {
        flexDirection: 'row'
    },
    textTouchableOrdenationFlatList: {
        fontSize: 15,
        marginRight: 10,
        color: 'gray'
    },
    IconOrdenationFlatList: {
        marginLeft: 50
    }
});