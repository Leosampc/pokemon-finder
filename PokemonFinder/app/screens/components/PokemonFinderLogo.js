import React from 'react';
import { View, Image } from 'react-native';
import Imgs from '../../ImageCollection'
import styles from './../../styles/PokemonFinderLogo'
const LogoPokemon = Imgs.logo.pokemon
const LogoFinder = Imgs.logo.finder

const PokemonFinderLogo = () => { //const que retorna a Logo completa da tela inicial
    return (
        <View
            style={styles.viewLogoAll}
        >
            <Image
                source={LogoPokemon}
                style={styles.LogoPokemon}
            />
            <Image
                source={LogoFinder}
                style={styles.LogoFinder}
            />
        </View>
    )
}

export default PokemonFinderLogo