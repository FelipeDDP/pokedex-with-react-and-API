import { useEffect, useState, useContext } from "react";
import { baseUrl, limitPerPage } from "../../variables/variables";
// import { getPokemonUrls } from "../../services/get-pokemon-urls";
import { ThemeContext } from '../../contexts/theme-context';
import { PokemonThumb } from '../pokemon-thumb/pokemon-thumb';
import { Section } from "./style";

export const PokemonList = () => {

    const [urlList, setUrlList] = useState([])
    const [pokemonData, setPokemonData] = useState([])
    const [shown, setShown] = useState(limitPerPage)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
         const getPokemonUrls = async () => {
            const response = await fetch(`${baseUrl}/?limit=${shown}&offset=${offset}`)
            const pokemons = await response.json()
            // console.log(pokemons)
            // console.log(pokemons.results)
            const urls = pokemons.results.map((pokemon) => {
                return pokemon.url
            })
            setUrlList(urls)
        }
        getPokemonUrls()
        // getPokemonUrls(baseUrl, shown, offset, setUrlList)
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
            console.log(pokemonData)
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
            <ul>
                <PokemonThumb data={pokemonData} />
            </ul>
            <button
                onClick={loadMorePokemon}
            >Show more</button>
            <button
                onClick={nextPage}
            >Next page</button>
        </Section>
    )
}