import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    viewAll: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1
    },
    viewTextTop: {
        alignItems: 'center',
        marginTop: hp('14%')
    },
    viewTextInputName: {
        alignItems: 'center'
    },
    viewBtnNext: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: hp('6%')
    },
    textTop: {
        color: '#FFF',
        fontSize: hp('4%'),
        flexWrap: 'wrap',
        width: wp('85%')
    },
    textInputName: {
        color: '#FFF',
        fontSize: hp('3.7%'),
        flexWrap: 'wrap',
        width: wp('85%')
    },
    inputName: {
        borderBottomColor: '#FFF',
        borderBottomWidth: 4,
        width: wp('85%'),
        color: '#FFF',
        fontSize: hp('3.7%'),
    },
    imageButtonNext: {
        width: wp('20%'),
        height: hp('20%'),
    }
});