import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    touchableTypeSelect: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageTypeSelect: {
        width: wp('15%'),
        height: hp('10%'),
        margin: hp('1%'),
        marginRight: wp('5%')
    },
});