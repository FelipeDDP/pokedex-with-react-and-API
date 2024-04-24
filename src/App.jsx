import styled from 'styled-components'
import { PokemonList } from './components/PokemonList/PokemonList'
// import { PokemonList2 } from './components/PokemonList/PokemonList2'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <Div>
      <PokemonList />
      <Outlet />
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  /* grid-template-areas: "sidebar details"; */
  /* grid-template-rows: 1fr 2fr; */
  height: 100%;
`

