import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    @font-face {
        font-family: 'Pokemon Classic';
        src: local(''), format('ttf'), url('/fonts/PokemonClassic.ttf');
    }

    body {
        font-family: 'Pokemon Classic';
    }
`