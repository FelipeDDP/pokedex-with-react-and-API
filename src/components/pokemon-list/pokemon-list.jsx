import { useEffect, useState } from "react";
import { baseUrl, limitPerPage } from "../../variables/variables";
import { getPokemonUrls } from "../../services/get-pokemon-urls";
import { Link } from 'react-router-dom'
// import { PokemonThumb } from "../pokemon-thumb/pokemon-thumb";

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
                    sprite: pokemon.sprites.front_default,
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
        setOffset(shown)
    }

    // console.log('offset ' + offset)

    return (
        <section>
            <ul>
                {/* <PokemonThumb list={list} /> */}
                {pokemonData.map((pokemon, index) => {
                    return (
                        <li key={index}>
                            <div>
                                <Link to={`/${pokemon.name}`}>
                                <img src={pokemon.sprite} />
                                <p>{pokemon.name}</p>
                                </Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <button
                onClick={loadMorePokemon}
            >Show more</button>
            <button
                onClick={nextPage}
            >Next page</button>
        </section>
    )
}