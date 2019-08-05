import React from 'react'
import { View, Text, ImageBackground, Modal, FlatList, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Imgs from './../ImageCollection'
import styles from './../styles/cadastroType'
import InputSelectType from './components/InputSelectType'
import ModalTypeSelectComponent from './components/ModalTypeSelectComponent'
import ViewButtonNext from './components/ViewButtonNext'

const Background = Imgs.bg //Imagem do background

class CadastroTypeScreen extends React.Component {
    static navigationOptions = {
        headerTransparent : true, //faz com que o header da navegação fique transparente
        headerTintColor   : '#FFF' //altera a cor do botão de retorno do header da navegação
    };

    constructor(props) {
        super(props)

        this.state = {
            name          : (this.props.navigation.state.params.name) ? this.props.navigation.state.params.name : '', //state name inicial vazio ou com a props name recebida do navigate (caso a props exista)
            type          : 'normal', //state que gerencia o tipo (Picker.item) selecionado no Picker, iniciando pela posição inicial (0)
            types         : [], //array de objetos de tipos
            loadingScreen : true,
            modalVisible  : false
        }

        //atribui para que o metodo _navigate seja executado a partir do componente atual
        this._navigate    = this._navigate.bind(this)
        this._modalUpdate = this._modalUpdate.bind(this)
        this._typeUpdate  = this._typeUpdate.bind(this)
    }

    async componentDidMount() {
        await AsyncStorage.getItem('TIPOS').then((res) => { //Caso encontre os dados referente à key 'TIPOS' armazenada
            types = JSON.parse(res); //"parseia" o res
            this.setState({ types, name: this.props.navigation.state.params.name }, () => { //seta os states
                this.setState({ loadingScreen: false })
            })
        }).catch(error => {
            console.log(error);
        })
    }

    _navigate = () => { //metodo que gerencia clique do botão next, para ativar a navegacao entre as telas cadastroName => cadastroType
        if (this.state.name.length > 2) { //mesma verificação executada na tela anterior, porém nesta o intuito é não deixar com que a navegação seja executada caso o state name esteja vazio por algum motivo
            AsyncStorage.setItem('USUARIO', JSON.stringify({ name: this.state.name, type: this.state.type }), () => { //seta a key 'USUARIO' com os dados do usuario (nome, tipo)
                this.props.navigation.navigate('HomeStack') //Navega para a tela 'HomeStack' (responsável por listar os tipos e os pokemons)
            })
        }
    }

    _modalUpdate = () => { //metodo que exibe/oculta o modal do select
        this.setState({ modalVisible: !this.state.modalVisible })
    }

    _typeUpdate = (type) => {
        this.setState({ type }, () => {
            this._modalUpdate()
        })
    }

    render() {
        return (this.state.loadingScreen) //caso o state 'loadingScreen' esteja true
            ?
            <ImageBackground
                source={Background}
                style={{ width: '100%', height: '100%' }}
            >
                <ActivityIndicator size="large" color="#FFF" />
            </ImageBackground>
            : // caso contrario
            <ImageBackground
                source={Background}
                style={{ width: '100%', height: '100%' }}
            >
                <View
                    style={styles.viewAll}
                >
                    <View
                        style={styles.viewTextTop}
                    >
                        <Text
                            style={styles.textTop}
                        >Hello, trainer {this.state.name}!</Text>
                    </View>
                    <View
                        style={styles.viewPicker}
                    >
                        <Text
                            style={styles.textTypePicker}
                        >...now tell us wich is your favorite Pokemon type</Text>
                        <InputSelectType 
                            type={this.state.type}
                            _modalUpdate={this._modalUpdate}
                        />
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={this.state.modalVisible}
                        >
                            <View 
                                style={styles.viewModalTypeSelect}>
                                <View>
                                    <FlatList
                                        data={this.state.types} //passamos o state 'types' como dado da FlatList
                                        renderItem={({ item }) => <ModalTypeSelectComponent type={item} _typeUpdate={this._typeUpdate} /> } //Usamos o component importado 'TypeComponent' para renderizar os tipos
                                        keyExtractor={(item, index) => index.toString()} //metodo para extrair uma key de cada elemento renderizado
                                        initialNumToRender="8" //atributo que dita o numero inicial de elementos à serem renderizados
                                    />
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <ViewButtonNext
                        _navigate={this._navigate}
                    />
                </View>
            </ImageBackground>
    }
}

export default CadastroTypeScreen
