import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    viewAll: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    buttonNext: {
        width: wp('15%'),
        height: hp('10%')
    }
})