import { useParams, Link } from "react-router-dom";
import { baseUrl } from "../../variables/variables";
import { useState, useEffect } from "react";

export const PokemonDetails = () => {

    const { name } = useParams()
    const [details, setDetails] = useState({
        name: '',
        sprite: '',
    })

    useEffect(() => {
        async function getPokemonDetails(name) {
            const response = await fetch(`${baseUrl}/${name}`)
            const pokemonData = await response.json()
            console.log(pokemonData)
            const pokemonDetails = {
                name: pokemonData.name,
                sprite: pokemonData.sprites.front_default,
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
                <img src={details.sprite} />
                <h2>{details.name}</h2>
            </div>
        </>
    )
}