import { Outlet } from "react-router-dom";
import { PokemonList } from "../components/PokemonList/PokemonList";
import styled from "styled-components";

export default function Root() {
  return (
    <>
      <Sidebar>
        <h1>Pokemons</h1>
        <nav>
          <PokemonList />
        </nav>
      </Sidebar>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

const Sidebar = styled.div`
  width: 20%;
  height: 100%;
  background: #f4f4f4;
`;
