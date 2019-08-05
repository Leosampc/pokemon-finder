import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import styles from './../../styles/TypeComponent'

const TypeComponent = (props) => {
    return (
        <TouchableOpacity
            style={styles.touchableType}
            onPress={() => props._searchPokemonsByType(props.type.name)}
        >
            <Image
                source={{ uri: `${props.type.thumbnailImage}` }}
                style={styles.imageType}
            />
            <Text>{props.type.name.charAt(0).toUpperCase() + props.type.name.slice(1)}</Text>
        </TouchableOpacity>
    )
}

export default TypeComponent