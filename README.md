# Pokemon Finder - React Native (0.60.x)

Esse projeto foi criado com a intenção de desenvolver um pequeno App relacionado á Pokemon

## Como executar esse projeto

1. Clonar o repositório e ir até o diretório **pokemon-finder/PokemonFinder/**
```
git clone https://github.com/Leosampc/pokemon-finder.git
```
2. acessar o diretório **pokemon-finder/PokemonFinder/**
```
cd pokemon-finder/PokemonFinder/
```
3. Executar o instalador de pacotes do npm para gerar a pasta node_modules/ com todas as dependências do projeto
```
npm install
```
4. Executar o comando para gerar os diretórios android/ e ios/, quais possuem os codigos nativos da nossa aplicação
```
react-native upgrade --legacy true
```
5. Abrir o diretório pokemon-finder/PokemonFinder/**android/** no Android Studio e esperar a aplicação executar o build do App
6. Com a configuração do projeto sincronizada no Android Studio, iniciar o **Android Virtual Device**, em: *Tools => AVD Manager*
7. Em uma aba do terminal, executar o comando para iniciar o servidor responsável por rodar a nossa aplicação no emulador
```
npm start
```
8. Com os passos anteriores executados corretamente, basta executar o comando para iniciar o App
```
react-native run-android
```

**Obs:** À partir da versão **0.60.x** do react-native, não é mais necessário executar o comando **react-native-link** para linkar as dependências nativas da nossa aplicação, o Facebook desenvolveu uma nova funcionalidade chamada **AutoLink**, que executa essa tarefa automaticamente toda vez em que o app é buildado. 
Porém, por algum motivo, ocorrem casos em que alguns pacotes não são linkados pelo **AutoLink**. Se por algum motivo, ao executar o app, 1 ou mais ícones não forem exibidos, é necessário efetuar a linkagem do **react-vector-icons** manualmente. Abaixo segue um exemplo:
```
react-native link react-native-vector-icons
```


## Pacotes/modulos utilizados na aplicação

* **@react-native-community/async-storage:** *"^1.5.1"*
* **@react-native-community/netinfo:** *"^4.1.3"*
* **react:** *"16.8.6"*
* **react-native:** *"0.60.4"*
* **react-native-elements:** *"^1.1.0"*
* **react-native-gesture-handler:** *"^1.3.0"*
* **react-native-responsive-screen:** *"^1.2.2"*
* **react-native-vector-icons:** *"^6.6.0"*
* **react-navigation:** *"^3.11.1"*

##Dependências Globais

* **python**
* **NodeJS**
* **npm**
* **Android SDK**
* **Android Studio**
