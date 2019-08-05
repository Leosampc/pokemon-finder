import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    TouchablePokemon: {
        flexDirection: 'row',
        margin: 10
    },
    viewImagePokemon: {
        backgroundColor: '#3498db',
        width: wp('13%'),
        height: wp('13%'),
        borderRadius: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ImagePokemon: {
        width: wp('6%'),
        height: hp('6%')
    },
    textPokemon: {
        alignSelf: 'center',
        marginLeft: 15,
    }
});