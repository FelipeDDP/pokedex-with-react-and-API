export const getPokemonUrls = async (baseUrl, shown, offset, setUrlList) => {
    const response = await fetch(`${baseUrl}/?limit=${shown}&offset=${offset}`)
    const pokemons = await response.json()
    // console.log(pokemons)
    // console.log(pokemons.results)
    const urls = pokemons.results.map((pokemon) => {
        return pokemon.url
    })
    setUrlList(urls)
}