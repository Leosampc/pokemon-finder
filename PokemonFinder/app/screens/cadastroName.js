import React from 'react';
import { View, Text, TextInput, ImageBackground, Alert } from 'react-native';
import Imgs from './../ImageCollection'
import styles from './../styles/cadastroName'
import ViewButtonNext from './components/ViewButtonNext'

const Background = Imgs.bg //Imagem do background

class CadastroNameScreen extends React.Component {
    static navigationOptions = {
        header: null //oculta o header da navegação
    };
    constructor(props) {
        super(props)
        this.state = { name: '', next: false } //state que controle o nome digitado e state que controla o estado do click do botao next
        
        //atribui para que o metodo _navigate seja executado a partir do componente atual
        this._navigate = this._navigate.bind(this)
    }
    
    _navigate = () => { //metodo que gerencia clique do botão next, para ativar a navegacao entre as telas cadastroName => cadastroType
        if(this.state.name.length > 2) { //caso a variavel de estado "name" possua mais de 2 caractéres, o metodo navigate é chamado para ir para a próxima tela
            this.props.navigation.navigate('CadastroType', { name: this.state.name }) //envia o name por props para a proxima tela
        } else {
            Alert.alert( //emite um alerta relatando o caso para o usuário
                'Nome inválido',
                'Favor revisar o seu nome e tentar novamente.',
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
                    <View
                        style={styles.viewTextTop}
                    >
                        <Text
                            style={styles.textTop}    
                        >Let's meet each other first?</Text>
                    </View>
                    <View
                        style={styles.viewTextInputName}
                    >
                        <Text
                            style={styles.textInputName}    
                        >First we need to know your name...</Text>
                        <TextInput
                            style={styles.inputName}
                            value={this.state.name}
                            onChangeText={(name) => this.setState({ name }) } //atualiza o state name toda vez em que o texto é alterado
                        />
                    </View>
                    <ViewButtonNext
                        _navigate={this._navigate} //passa por props o metodo navigate para o component do botão "next"
                    />
                </View>
            </ImageBackground>
        );
    }
}

export default CadastroNameScreen
