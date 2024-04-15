import styled from 'styled-components'
import { PokemonList } from './components/PokemonList/PokemonList'
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
  height: 100%;
`

