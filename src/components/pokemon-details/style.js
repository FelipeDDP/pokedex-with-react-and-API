import styled from 'styled-components';

export const Section = styled.section`
    /* grid-area: details; */
    /* overflow-y: auto; */
    flex: 1;
    background-color: grey;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Card = styled.div`
    /* background-color: coral; */
`
export const TopBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: red;
    width: 800px;
    position: relative;
    border-radius: 10px 10px 0 10px;
    margin-bottom: 150px;
    /* height: 400px;  */
    `
export const TopShape = styled.div`
    position: absolute;
    background-color: red;
    width: 400px;
    height: 70px;
    right: 0;
    bottom: -70px;
    clip-path: polygon(0 0, 60px 70px, 400px 70px, 400px 0);
    border-radius: 0px 0px 10px 10px;
    `

export const Img = styled.img`
    /* background-color: coral; */
    /* image-rendering: pixelated; */
    width: 500px;
`

export const LowerBox = styled.div`
    background-color: red;
    position: relative;
    border-radius: 0 10px 10px;
    margin-bottom: 50px;
    width: 800px;
`
export const BottomShape = styled.div`
    position: absolute;
    top: -70px;
    background-color: red;
    width: 400px;
    height: 70px;
    clip-path: polygon(0 0, 340px 0, 400px 70px, 0 70px);
    border-radius: 10px 0 0;
`

export const moveBox = styled.div`
    padding: 10px;
    min-width: 160px;
    font-size: 10px;
    background-color: white;
    border-style: double;
    margin: 5px;

    h4 {
        text-transform: capitalize;
    }

    .type {
        text-transform: uppercase;
        border: solid 1px;
        background-color: brown;
        color: white;
        font-size: 6px;
        width: 9ch;
        padding: 0.5ch 1ch;
        text-align: center;
        border-radius: 5px;

    }
`

export const Ul = styled.ul`
    /* background-color: coral; */
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`