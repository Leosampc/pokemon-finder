import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import styles from '../../styles/ModalTypeSelectComponent.js'

const ModalTypeSelectComponent = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props._typeUpdate(props.type.name)}
            style={styles.touchableTypeSelect}
        >
            <Image
                source={{ uri: `${props.type.thumbnailImage}` }}
                style={styles.imageTypeSelect}
            />
            <Text>{props.type.name.charAt(0).toUpperCase() + props.type.name.slice(1)}</Text>
        </TouchableOpacity>
    )
}

export default ModalTypeSelectComponent


