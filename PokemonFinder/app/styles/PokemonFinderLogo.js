import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    viewLogoAll: {
        alignItems: 'center',
        marginTop: 20,
    },
    LogoPokemon: {
        width: wp('90%'),
        height: hp('20%')
    },
    LogoFinder: {
        width: wp('30%'),
        height: hp('7%')
    },
});