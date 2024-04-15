import styled, { css } from 'styled-components'

export const Imagem = styled.div`
    ${({theme}) => css`
        color: ${theme.colors.primary};
    `}
`