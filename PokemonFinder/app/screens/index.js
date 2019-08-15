import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage' //Modulo do AsyncStorage
import NetInfo from "@react-native-community/netinfo" //Modulo do NetInfo
import Imgs from './../ImageCollection' //Modulo que retorna o objeto Img baseado na resolução do dispositivo
import styles from './../styles/index' //Estilos
import PokemonFinderLogo from './components/PokemonFinderLogo' //Componente do Logo Inicial

const Background = Imgs.bg //Imagem de Background
const Pikachu    = Imgs.pikachu //Imagem do Pikachu

class IndexScreen extends React.Component {
    static navigationOptions = {
        header: null //Oculta o header da navegação
    };

    constructor(props) {
        super(props)

        this.state = { 
            usuario     : null, //dados do usr
            types       : null, //array de objetos de tipos
            pokemonsAll : null, //array de objetos de pokemons
            internet    : false, //starta como false
        }
    }

    async componentDidMount() {
        await AsyncStorage.getItem('USUARIO').then((res) => { //Caso possua a key 'USUARIO'
            usuario = JSON.parse(res) //"parseia os dados"
            this.setState({ usuario }) //seta o state
        }).catch(error => {
            console.log(error);
        })

        await AsyncStorage.getItem('TIPOS').then((res) => { //Caso possua a key 'TIPOS'
            types = JSON.parse(res); //"parseia os dados"
            this.setState({ types }) //seta o state
        }).catch(error => {
            console.log(error);
        })

        await AsyncStorage.getItem('POKEMONS').then((res) => { //Caso possua a key 'POKEMONS'
            pokemonsAll = JSON.parse(res); //"parseia os dados"
            this.setState({ pokemonsAll }) //seta o state
        }).catch(error => {
            console.log(error);
        })

        NetInfo.fetch().then(state => { //Utiliza o modulo NetInfo para resgatar o estado da conexao
            if (state.isConnected) { //caso o atributo 'isConnected' seja 'true'
                this.setState({ internet: true }) //seta o state internet pra 'true'
            }
        });
    }

    _navigate = async () => { //metodo navigate
        if(this.state.internet) { //caso tenha sido detectada conexao com a internet
            await fetch('https://vortigo.blob.core.windows.net/files/pokemon/data/types.json') //busca os tipos
                .then((response) => response.json())
                .then((types) => {
                    this.setState({ types: types.results }) //seta o state 'types' com o retorno do fetch
                })
                .catch((error) => {
                    console.error(error);
                });
            await fetch('https://vortigo.blob.core.windows.net/files/pokemon/data/pokemons.json') //busca os pokemons
                .then((response) => response.json())
                .then((pokemonsAll) => {
                    this.setState({ pokemonsAll }) //seta o state 'pokemonsAll' com o retorno do fetch
                })
                .catch((error) => {
                    console.error(error);
                });
        }

        if(this.state.types && this.state.pokemonsAll) { //caso os state 'types' e 'pokemonsAll' não sejam nulos, ou seja, caso o App tenha encontrado os dados na memória (AsyncStorage) ou por fetch
            await AsyncStorage.setItem('TIPOS', JSON.stringify(this.state.types)) //seta a key 'TIPOS' armazenando todos os tipos
            await AsyncStorage.setItem('POKEMONS', JSON.stringify(this.state.pokemonsAll)) //seta a key 'POKEMONS' armazenando todos os pokemons
            
            if (this.state.usuario !== null) { //caso o state usuario não seja nulo, ou seja, caso o App tenha encontrado os dados na memória (AsyncStorage)
                this.props.navigation.navigate('HomeStack') //Redireciona direto pra tela 'HomeScreen' (tela que lista os pokemons)
            } else { //caso contrario
                this.props.navigation.navigate('CadastroStack') //Redireciona para a rota inicial de cadastro do usuario
            }
        } else { //caso contrário
            Alert.alert( //emite um alerta relatando o caso para o usuário
                'Problema de conexão',
                'Estamos tendo problemas de conexão, favor tente mais tarde.',
                [
                    { text: 'OK' },
                ],
                { cancelable: false },
            );
        }
    }
    
    render() {
        return (
            <ImageBackground
                source={Background}
                style={{ width: '100%', height: '100%' }}
            >
                <View 
                    style={styles.viewAll}
                >
                    <PokemonFinderLogo />
                    <View
                        style={styles.viewButton}
                    >
                        <TouchableOpacity
                            style={styles.ButtonComponent}
                            onPress={() => this._navigate() } //metodo de navegação entre telas index => cadastroName ao clicar no botão
                        >
                            <Text
                                style={styles.ButtonText}
                            >Let's go!</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={styles.viewPikachu}
                    >
                        <Image
                            source={Pikachu}
                            style={styles.Pikachu}
                        />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default IndexScreen
