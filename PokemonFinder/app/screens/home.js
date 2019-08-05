import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, FlatList, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { SearchBar, Icon } from 'react-native-elements';
import styles from './../styles/home'
import TypeComponent from './components/TypeComponent' //Component que renderiza um elemento 'type' pra FlatList
import PokemonComponent from './components/PokemonComponent' //Component que renderiza um elemento de 'pokemon' pra FlatList
import Imgs from './../ImageCollection'

const Background = Imgs.bg //Background

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null //oculta o header da navegação
    };
    constructor(props) {
        super(props)
        this.state = { 
            loadingScreen   : true, //gerencia o estado do carregamento geral da tela
            loadingTypes    : true, //gerencia o estado do carregamento dos tipos
            loadingPokemons : true, //gerencia o estado do carregamento dos pokemons
            usuario         : {}, //state que receberá o objeto de usuário
            type            : '', //tipo atual
            search          : '', //gerencia o estado do campo de busca
            types           : [], //array que recebe os objetos de tipos
            pokemonsAll     : [], //array que recebe todos objetos de  pokemons
            pokemonsType    : [], //array que recebe todos os objetos de pokemons, relacionados ao tipo selecionado
            pokemonsScreen  : [], //array que recebe todos objetos de pokemons que serão exibidos na tela
            isAsc           : false //gerencia o estado da ordenação da listagem dos pokemons: true = A-Z, false = unsorted (inicial) ou Z-A)
        }

        //define que os métodos abaixo sejam executados a partir do componente atual
        this._searchPokemonsByType = this._searchPokemonsByType.bind(this)
        this._searchPokemonsByName = this._searchPokemonsByName.bind(this)
        this._sortPokemonList      = this._sortPokemonList.bind(this)
    }

    async componentDidMount() {
        await AsyncStorage.getItem('USUARIO') //busca os dados da key 'USUARIO'
            .then(res => {
                let usuario = JSON.parse(res) //"parseia" o res
                this.setState({ usuario }, () => { //seta os dados de usuario
                    AsyncStorage.getItem('TIPOS') //busca os dados da key 'TIPOS'
                        .then(res => {
                            let types = JSON.parse(res) //"parseia" o res
                            this.setState({ types }, () => { //seta os dados de tipos
                                AsyncStorage.getItem('POKEMONS') //busca os dados da key 'POKEMONS'
                                    .then(res => {
                                        let pokemonsAll = JSON.parse(res) //"parseia" o res
                                        this.setState({ pokemonsAll }, () => { //seta os dados de pokemons
                                            this._searchPokemonsByType(this.state.usuario.type) //passa o tipo preferido do usuário para o método que busca os pokemons pelo tipo
                                            this.setState({ loadingScreen: false }) //desativa o loading
                                        })
                                    })
                            })
                        })
                }) 
            })
    }

    _searchPokemonsByType = type => { //pesquisa todos os pokemons relacionados á um determinado tipo
        this.setState({ type, loadingPokemons: true }, () => { //seta o novo tipo e altera o state que controla o carregamento dos pokemons para true
            AsyncStorage.setItem('USUARIO', JSON.stringify({ name: this.state.usuario.name, type: type }))
            const newPokemonsType = this.state.pokemonsAll.filter(item => { //percorre o objeto de pokemons atribuindo à uma const
                const typeData = type.toLowerCase() //transforma o texto em minúsculo
                return item.type.indexOf(typeData) > -1 //retorna caso o atributo String "type" do objeto possua o tipo recebido
            })
            this.setState({ pokemonsType: newPokemonsType, pokemonsScreen: newPokemonsType, search: '' }, () => { //atualiza o state de pokemons e esvazia o campo de busca
                this.setState({ loadingPokemons: false }) //atualiza o state que controla o carregamento dos pokemons pra false após a conclusao do processo
            })
        })
    }

    _searchPokemonsByName = search => { //pesquisa todos os pokemons relacionados á palavra digitada no cambo de busca
        this.setState({ search, loadingPokemons: true }, () => { //seta o novo tipo e altera o state que controla o carregamento dos pokemons para true
            const newPokemonsScreen = this.state.pokemonsType.filter(item => { //percorre o objeto de pokemons atribuindo à uma const
                const nameData = search.toLowerCase() //transforma o texto em minúsculo
                return item.slug.indexOf(nameData) > -1 //retorna caso o atributo String "slug" (nome do pokemon em minusculo) do objeto possua o tipo recebido
            })
            this.setState({ pokemonsScreen: newPokemonsScreen }) //atualiza o state de pokemons
        })
    }

    _sortPokemonList = () => { //metodo que ordena o array de objetos dos pokemons de A-Z ou Z-A
        this.setState({ isAsc: !this.state.isAsc }, () => { //sempre altera o state 'isAsc' para o valor contrário do mesmo
            const myData = this.state.pokemonsScreen //atribui o state 'pokemonsScreen' à uma const para ser usada futuramente
            if(this.state.isAsc) { //caso isAsc esteja 'true', entao ordenamos o array crescentemente (A-Z)
                myData.sort(function (a, b) { //metodo sort do javascript, responsável por ordenar o array
                    if (a.slug < b.slug) { return -1; } //se a for menor que b em algum criterio de ordenacao, retorna -1
                    if (a.slug > b.slug) { return 1; } //se a for maior que b em algum criterio de ordenacao, retorna +1
                    return 0; //a e b sao iguais
                })
            } else { //caso isAsc esteja 'false', entao ordenamos o array decrescentemente (Z-A)
                myData.sort(function (a, b) { //metodo sort do javascript, responsável por ordenar o array
                    if (a.slug < b.slug) { return 1; } //se a for maior que b em algum critério de ordenacao, retorna 1
                    if (a.slug > b.slug) { return -1; } //se a for maior que b em algum criterio de ordenacao, retorna -1
                    return 0; //a e b sao iguais
                })
            }
            this.setState({ pokemonsScreen: myData }) //Atualiza o state 'pokemonsScreen' com o array ordenado pelos critérios anteriores
        })
    }

    render() {
        const { search, pokemonsScreen } = this.state //retorna os states 'search' e 'pokemonsScreen' como const
        
        return (this.state.loadingScreen) //caso o loadinScreen esteja true
        ?
            <ImageBackground
                source={Background}
                style={{ width: '100%', height: '100%' }}
            >  
                <ActivityIndicator size="large" color="#FFF" />
                
            </ImageBackground>
        : //caso contrario
            <View
                style={styles.ViewAll}
            >
                <SearchBar
                    plataform="android"
                    lightTheme
                    placeholder="Pokemon Finder"
                    placeholderTextColor="#FFF"
                    value={search} //valor da searchbar é o state 'search', assim controlamos o estado do campo
                    onChangeText={this._searchPokemonsByName} //sempre que o texto for alterado, chama o metodo relacionado
                    containerStyle={styles.searchBarContainerStyle}
                    inputContainerStyle={styles.searchBarInputContainerStyle}
                    inputStyle={styles.searchBarInputStyle}
                    searchIcon={<Icon name='search' color='#FFF' />}
                    clearIcon={<Icon name='cancel' color='#FFF' />}
                />
                <View
                    style={styles.viewTypes}
                >
                    <FlatList
                        horizontal
                        data={this.state.types} //passamos o state 'types' como dado da FlatList
                        renderItem={({ item }) => <TypeComponent type={item} _searchPokemonsByType={this._searchPokemonsByType} />} //Usamos o component importado 'TypeComponent' para renderizar os tipos
                        keyExtractor={(item, index) => index.toString()} //metodo para extrair uma key de cada elemento renderizado
                        initialNumToRender="8" //atributo que dita o numero inicial de elementos à serem renderizados
                    />
                </View>
                <View
                    style={styles.viewOrdenationFlatList}
                >
                    <Text
                        style={styles.textOrdenationFlatList}
                    >Pokémon</Text>
                    <TouchableOpacity
                        style={styles.touchableOrdenationFlatList}
                        onPress={() => this._sortPokemonList()}
                    >
                        <Text
                            style={styles.textTouchableOrdenationFlatList}
                        >Name</Text>
                        <Icon
                            name={(this.state.isAsc) ? 'arrow-down' : 'arrow-up'} //caso o state isAsc esteja 'true', exibe o icone 'arrow-down', caso contrario exibe o 'arrow-up'
                            type='font-awesome'
                            color='gray'
                            style={styles.IconOrdenationFlatList}
                        />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={pokemonsScreen} //passamos o state 'types' como dado da FlatList
                    renderItem={ ({ item }) => <PokemonComponent pokemon={item} />} //Usamos o component importado 'PokemonComponent' para renderizar os pokemons
                    ListEmptyComponent={<Text>Carregado</Text>} //atributo que renderiza um elemento caso a FlatList esteja vazia
                    keyExtractor={(item, index) => index.toString()} //metodo para extrair uma key de cada elemento renderizado
                    removeClippedSubviews={true}
                    initialNumToRender="10" //atributo que dita o numero inicial de elementos à serem renderizados
                />
            </View>
    }
}

export default HomeScreen
