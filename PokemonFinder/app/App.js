import React from 'react'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation"; //modulo responsável por implementar a navegação entre delas da aplicação
import IndexScreen from './screens/index'
import CadastroNameScreen from './screens/cadastroName'
import CadastroTypeScreen from './screens/cadastroType'
import HomeScreen from './screens/home'

const InitialNavigatorStack = createStackNavigator( //Rota do index (inicial do app)
  {
    Index: {
      screen: IndexScreen
    }
  }
)

const CadastroNavigatorStack = createStackNavigator( //Rotas de cadastro (nome e tipo de pokemon)
  {
    CadastroName: {
      screen: CadastroNameScreen
    },
    CadastroType: {
      screen: CadastroTypeScreen
    }
  },
  {
    initialRouteName: "CadastroName"
  }
)

const HomeNavigatorStack = createStackNavigator( //Rota da HomeScreen (listagem dos pokemons)
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: "Home"
  }
)

const AppNavigator = createSwitchNavigator( //Relaciona as rotas criadas anteriormente
  {
    InitialStack  : InitialNavigatorStack,
    CadastroStack : CadastroNavigatorStack,
    HomeStack     : HomeNavigatorStack
  },
  {
    initialRouteName: 'InitialStack'
  }
)

export default createAppContainer(AppNavigator);