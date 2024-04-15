import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeContext } from '../../contexts/theme-context';
import { useContext } from 'react';

export const PokemonThumb = ({ data }) => {
  console.log(data)

  const { theme } = useContext(ThemeContext)

  const numberOfDigits = (pokemon) => {
    const idString = String(pokemon.id)
    const numZeroes = 4 - idString.length
    return '0'.repeat(numZeroes)
  }
  
  return (
    <>
      {data.map((pokemon, index) => {
        const digits = numberOfDigits(pokemon)
        return (
          <li key={index}>
            <Link to={`/${pokemon.name}`}>
              <Number>{`${digits}${pokemon.id}`}</Number>
              <Div 
              className='img-container'
              // style={{ backgroundColor: theme.bgContainer}}
              >
                <Img1 className='img1' src={pokemon.icon} alt={pokemon.name} />
                {/* <Img2 className='img2' src={pokemon.sprite} alt={pokemon.name} /> */}
                <p>{pokemon.name}</p>
              </Div>
            </Link>
          </li>
        )
      })}
    </>
  )
}

const Number = styled.p`
  color: #084152;
`

const Div = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 30px;
  margin: 10px;
  text-transform: uppercase;
  font-size: 25px;
  border-radius: 60px;
  letter-spacing: 10px;
  color: #084152; */
  
  &:hover {
    /* padding-inline: 10px; */
  }
  
  &:hover .img1 {
    /* display: none; */
  }
  
  &:hover .img2 {
    /* display: block; */
    /* scale: 1; */
  }
`

const Img1 = styled.img`
  /* image-rendering: pixelated;
  width: 50px;
  margin-right: 20px; */
  `

const Img2 = styled.img`
  /* image-rendering: pixelated;
  width: 100px;
  margin-right: 20px;
  display: none;
  scale: 0;
  transition: scale 2s ease 1s; */
`