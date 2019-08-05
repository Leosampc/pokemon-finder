import React from 'react';
import { PixelRatio } from 'react-native'; //modulo do react-native responsavel por capturar a densidade de pixeis do dispositivo

//Objetos com todas as imgs da aplicacao. Cada objeto corresponde à uma resolução de tela
const mdpi = {
    arrow   : require("./assets/img/arrow/mdpi/Arrow.png"),
    bg      : require("./assets/img/bg/mdpi/bg.png"),
    btnnext : require("./assets/img/btnnext/mdpi/next.png"),
    logo    : {
        finder  : require("./assets/img/logo/finder/mdpi/finder.png"),
        pokemon : require("./assets/img/logo/pokemon/mdpi/pokemon_logo.png"),
    },
    pikachu : require("./assets/img/pikachu/mdpi/pikachu_dab.png"),

}

const hdpi = {
    arrow   : require("./assets/img/arrow/hdpi/Arrow.png"),
    bg      : require("./assets/img/bg/hdpi/bg.png"),
    btnnext : require("./assets/img/btnnext/hdpi/next.png"),
    logo    : {
        finder  : require("./assets/img/logo/finder/hdpi/finder.png"),
        pokemon : require("./assets/img/logo/pokemon/hdpi/pokemon_logo.png"),
    },
    pikachu : require("./assets/img/pikachu/hdpi/pikachu_dab.png"),

}

const xhdpi = {
    arrow   : require("./assets/img/arrow/xhdpi/Arrow.png"),
    bg      : require("./assets/img/bg/xhdpi/bg.png"),
    btnnext : require("./assets/img/btnnext/xhdpi/next.png"),
    logo    : {
        finder  : require("./assets/img/logo/finder/xhdpi/finder.png"),
        pokemon : require("./assets/img/logo/pokemon/xhdpi/pokemon_logo.png"),
    },
    pikachu : require("./assets/img/pikachu/xhdpi/pikachu_dab.png"),

}

const xxhdpi = {
    arrow   : require("./assets/img/arrow/xxhdpi/Arrow.png"),
    bg      : require("./assets/img/bg/xxhdpi/bg.png"),
    btnnext : require("./assets/img/btnnext/xxhdpi/next.png"),
    logo    : {
        finder  : require("./assets/img/logo/finder/xxhdpi/finder.png"),
        pokemon : require("./assets/img/logo/pokemon/xxhdpi/pokemon_logo.png"),
    },
    pikachu : require("./assets/img/pikachu/xxhdpi/pikachu_dab.png"),

}

const xxxhdpi = {
    arrow   : require("./assets/img/arrow/xxxhdpi/Arrow.png"),
    bg      : require("./assets/img/bg/xxxhdpi/bg.png"),
    btnnext : require("./assets/img/btnnext/xxxhdpi/next.png"),
    logo    : {
        finder  : require("./assets/img/logo/finder/xxxhdpi/finder.png"),
        pokemon : require("./assets/img/logo/pokemon/xxxhdpi/pokemon_logo.png"),
    },
    pikachu : require("./assets/img/pikachu/xxxhdpi/pikachu_dab.png"),

}

const pixelRatio = parseFloat(PixelRatio.get()) //método que retorna o dpi da tela

//exporta o objeto relacionado ao dpi da tela (resgatado acima)
export default (pixelRatio >= 3.5) ? xxxhdpi
             : (pixelRatio >= 3 && pixelRatio < 3.5) ? xxhdpi
             : (pixelRatio >= 2 && pixelRatio < 3) ? xhdpi
             : (pixelRatio >= 1.5 && pixelRatio < 2) ? hdpi
             : mdpi
