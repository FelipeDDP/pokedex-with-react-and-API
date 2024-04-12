import { useParams, Link } from "react-router-dom";
import { baseUrl } from "../../variables/variables";
import { useState, useEffect } from "react";
import styled from 'styled-components';

export const PokemonDetails = () => {

    const { name } = useParams()
    const [details, setDetails] = useState({
        name: '',
        sprite: '',
        animation: '',
    })

    useEffect(() => {
        async function getPokemonDetails(name) {
            const response = await fetch(`${baseUrl}/${name}`)
            const pokemonData = await response.json()
            console.log(pokemonData)
            const pokemonDetails = {
                name: pokemonData.name,
                sprite: pokemonData.sprites.front_default,
                animation: pokemonData.sprites.other.showdown.front_default,
            }
            console.log(pokemonDetails)
            setDetails(pokemonDetails)
        }
        getPokemonDetails(name)
    }, [])

    console.log(details)

    return (
        <>
            <Link to="/">Back to list</Link>
            <div>
                <Img src={details.animation} />
                <h2>{details.name}</h2>
            </div>
        </>
    )
}

const Img = styled.img`
    image-rendering: pixelated;
`

