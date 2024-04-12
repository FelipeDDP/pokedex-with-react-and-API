import { useEffect, useState, useContext } from "react";
import { baseUrl, limitPerPage } from "../../variables/variables";
import { getPokemonUrls } from "../../services/get-pokemon-urls";
import styled from 'styled-components'
import { ThemeContext } from '../../contexts/theme-context';
import { PokemonThumb } from '../pokemon-thumb/pokemon-thumb';

export const PokemonList = () => {

    const [urlList, setUrlList] = useState([])
    const [pokemonData, setPokemonData] = useState([])
    const [shown, setShown] = useState(limitPerPage)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        getPokemonUrls(baseUrl, shown, offset, setUrlList)
    }, [shown, offset])

    // console.log(urlList)

    useEffect(() => {
        const fetchPokemonData = async () => {
            const responses = await Promise.all(
                urlList.map(url => fetch(url))
            )
            const jsons = await Promise.all(
                responses.map(response => response.json())
            )
            // console.log(jsons)
            const pokemonData = jsons.map(pokemon => {
                return {
                    name: pokemon.name,
                    id: pokemon.id,
                    sprite: pokemon.sprites.front_default,
                    animation: pokemon.sprites.other.showdown.front_default,
                    icon: pokemon.sprites.versions["generation-vii"].icons.front_default,
                }
            }
            )
            setPokemonData(pokemonData)
        }
        fetchPokemonData()
    }, [urlList])

    // console.log(pokemonData)

    const loadMorePokemon = () => {
        const shownPerPage = shown + limitPerPage
        setShown(shownPerPage)
    }

    // console.log(shown)

    const nextPage = () => {
        const currentOffset = shown + offset
        setOffset(currentOffset)
    }

    // console.log('offset ' + offset)

    const { theme } = useContext(ThemeContext)

    return (
        <Section>
            <Ul>
                <PokemonThumb data={pokemonData} />
            </Ul>
            <button
                onClick={loadMorePokemon}
            >Show more</button>
            <button
                onClick={nextPage}
            >Next page</button>
        </Section>
    )
}


const Section = styled.section`
    max-width: 1000px;
    padding: 30px;
    margin: 30px;
    border-radius: 20px;
`

const Ul = styled.ul`
    
`