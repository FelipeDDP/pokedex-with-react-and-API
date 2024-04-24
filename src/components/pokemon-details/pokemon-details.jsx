import { useParams, Link, useLoaderData } from "react-router-dom";
import { baseUrl } from "../../variables/variables";
import { useState, useEffect } from "react";
import styled from 'styled-components';
import * as styles from './style'

export const PokemonDetails = () => {

    const { name } = useParams()
    const [details, setDetails] = useState({})
    const [ability, setAbility] = useState()
    const [moves, setMoves] = useState([])

    // console.log(ability)

    useEffect(() => {
        async function getPokemonDetails(name) {
            const pokemonResponse = await fetch(`${baseUrl}/${name}`)
            const pokemonData = await pokemonResponse.json()
            console.log(pokemonData)
            const abilityResponse = await fetch(pokemonData.abilities[0].ability.url)
            const abilityData = await abilityResponse.json()
            console.log(abilityData)
            const englishItem = abilityData.effect_entries.find(ability => ability.language.name === "en")
            const moveResponse = await Promise.all(
                pokemonData.moves.map(move => fetch(move.move.url))
            )
            const moveData = await Promise.all(
                moveResponse.map(response => response.json())
            )
            console.log(moveData)

            const pokemonDetails = {
                name: pokemonData.name,
                sprite: pokemonData.sprites.front_default,
                animation: pokemonData.sprites.other.showdown.front_default,
                model: pokemonData.sprites.other.home.front_default,
                type1: pokemonData.types[0].type.name,
                type2: pokemonData.types[1] ? pokemonData.types[1].type.name : '',
                abilityName: pokemonData.abilities[0].ability.name,
                abilityDescription: englishItem.effect,
            }

            const moveDetails = moveData.map(move => {
                return {
                    name: move.name,
                    id: move.id,
                    type: move.type.name,
                    accuracy: move.accuracy,
                    power: move.power,
                    pp: move.pp,
                    class: move.damage_class.name,
                }
            })
            setDetails(pokemonDetails)
            console.log(pokemonDetails)
            setAbility(pokemonDetails.abilityUrl)
            setMoves(moveDetails)
            console.log(moveDetails)

        }
        getPokemonDetails(name)
    }, [name])

    const removeUnderscore = (str) => str.replace(/-/g, ' ')

    const checkPower = (power) => {
        return power ? `Power: ${power} ` : "Status Effect"
    }

    return (
        <styles.Section>
            <Link to="/">Back to list</Link>
            <styles.Card>
                <styles.TopBox>
                    <styles.Img src={details.model} />
                    <h1>{details.name}</h1>
                    <span>{details.type1}</span>
                    <span>{details.type2}</span>
                    <styles.TopShape />
                </styles.TopBox>
                <styles.LowerBox>
                    <styles.BottomShape />
                    <div>
                        <span>{details.abilityName}</span>
                        <p>{details.abilityDescription}</p>
                        <styles.Ul>
                            {moves.map(move => {
                                return (
                                    <li key={move.id}>
                                        <styles.moveBox>
                                            <h4>{removeUnderscore(move.name)}</h4>
                                            <p className="type">{move.type}</p>
                                            <p>{checkPower(move.power)}</p>
                                            <p>PP: {move.pp}/{move.pp}</p>
                                        </styles.moveBox>
                                    </li>
                                )
                            })}
                        </styles.Ul>
                    </div>
                </styles.LowerBox>
            </styles.Card>
        </styles.Section>
    )
}





