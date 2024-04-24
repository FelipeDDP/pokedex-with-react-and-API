// import { useLoaderData } from "react-router-dom"
// import { baseUrl, limitPerPage } from "../../variables/variables"
// import { useState } from "react"

// export const urlLoader = async (shown) => {
//     const response = await fetch(`${baseUrl}/?limit=${shown}`)
//     const { results } = await response.json()
//     const urls = results.map(result => result.url)
//     const pokemonData = Promise.all(
//         urls.map(async (url) => {
//             const response = await fetch(url)
//             const pokemon = await response.json()
//             console.log(pokemon)
//             return {
//                 name: pokemon.name,
//                 id: pokemon.id,
//                 icon: pokemon.sprites.versions["generation-vii"].icons.front_default,
//             }
//         })
//     )
//     return pokemonData
// }

// export const PokemonList2 = () => {
//     const pokemonData = useLoaderData()
//     console.log(pokemonData)

//     const [shown, setShown] = useState(limitPerPage)

  

//     return (
//         <div>
//             <ul>
//                 {pokemonData.map(pokemon => {
//                     return (
//                         <li key={pokemon.name}>
//                             <img src={pokemon.icon} />
//                             {pokemon.id}{pokemon.name}</li>
//                     )
//                 })}
//             </ul>
//             <button >Load more</button>
//         </div>
//     )
// }

