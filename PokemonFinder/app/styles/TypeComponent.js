import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    touchableType: {
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10
    },
    imageType: {
        width: wp('25%'),
        height: hp('15%')
    }  
});