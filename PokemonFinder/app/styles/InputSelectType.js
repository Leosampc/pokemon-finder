import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    viewInputSelectType: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('85%'),
        borderBottomColor: '#FFF',
        borderBottomWidth: 4,
        marginTop: hp('5%')
    },
    textInputSelectType: {
        fontSize: hp('3.7%'),
        color: '#FFF'
    },
    touchableSelectInputType: {
        flexDirection: 'row'
    },
    
});