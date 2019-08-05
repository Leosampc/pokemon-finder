import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Imgs from '../../ImageCollection'
import styles from './../../styles/ViewButtonNext'

const ButtonNext = Imgs.btnnext

const ViewButtonNext = (props) => { //Component que retorna a view com o botão 'next'
    return (
        <View
            style={styles.viewAll}
        >
            <TouchableOpacity
                onPress={() => props._navigate() } //metodo _navigate recebido por props
            >
                <Image
                    source={ButtonNext}
                    style={styles.buttonNext}
                />
            </TouchableOpacity>
        </View>
    )
}

export default ViewButtonNext