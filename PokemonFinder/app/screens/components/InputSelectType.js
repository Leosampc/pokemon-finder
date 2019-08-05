import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import styles from './../../styles/InputSelectType'

const InputSelectType = (props) => {
    return (
        <View
            style={styles.viewInputSelectType}
        >
            <Text
                style={styles.textInputSelectType}
            >{props.type.charAt(0).toUpperCase() + props.type.slice(1)}</Text>
            <TouchableOpacity
                style={styles.touchableSelectInputType}
                onPress={() => props._modalUpdate()}
            >
                <Icon
                    name='keyboard-arrow-down'
                    type='material'
                    color='#FFF'
                    size={hp('8%')}
                />
            </TouchableOpacity>
        </View>
    )
}

export default InputSelectType