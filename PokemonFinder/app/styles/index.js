import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    viewAll: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    viewButton: {
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    viewPikachu: {
        alignSelf: 'flex-end'
    },
    Pikachu: {
        width: wp('60%'),
        height: hp('35%')
    },
    ButtonComponent: {
        backgroundColor: '#E91E63',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: wp('75%'),
        height: hp('7%')
    },
    ButtonText: {
        color: '#FFF',
        fontSize: hp('4%'),
    }
});