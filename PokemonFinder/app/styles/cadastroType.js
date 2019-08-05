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
        marginTop: 90,
    },
    viewPicker: {
        alignItems: 'center',
    },
    textTop: {
        color: '#FFF',
        fontSize: hp('4%'),
        flexWrap: 'wrap',
        width: wp('85%')
    },
    textTypePicker: {
        color: '#FFF',
        fontSize: hp('3.7%'),
        flexWrap: 'wrap',
        width: wp('90%')
    },
    viewModalTypeSelect: { 
        backgroundColor: 'white',
        width: wp('80%'),
        height: hp('30%'),
        margin: wp('10%'),
        marginTop: hp('62%'),
        elevation: 20
    }
});