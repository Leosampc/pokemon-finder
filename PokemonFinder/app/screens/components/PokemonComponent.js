import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './../../styles/PokemonComponent'
class PokemonComponent extends React.PureComponent { //Component responsável por renderizar os pokemons na FlatList
    constructor(props) {
      super(props)
    }
    
    render () {
        return (
            <TouchableOpacity
                style={styles.TouchablePokemon}
            >
                <View
                    style={styles.viewImagePokemon}
                >
                    <Image
                        source={{ uri: `${this.props.pokemon.thumbnailImage}` }}
                        style={styles.ImagePokemon}
                    />
                </View>
                <Text
                    style={styles.textPokemon}
                >{this.props.pokemon.name}</Text>
            </TouchableOpacity>
        )
    }
}

export default PokemonComponent