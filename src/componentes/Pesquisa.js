import React from "react"
import styled from "styled-components"


const BarraEsquerda = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 80vh;
    border: 1px solid black;
    margin: 1em;

    h3{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1em;
    }

    div{
        display: flex;
        flex-direction: column;
        margin-left: 1em;
    }

    label {
        margin-bottom: 0.5em;
    }

    input{
        width: 50%;
        margin-bottom: 1em;
    }
`

export default class Pesquisa extends React.Component{
    render(){
        return(
            <BarraEsquerda>
                <h3>Filtros</h3>
                <div>
                    <label>Valor mínimo:</label>
                    <input type = {"number"}/>
                    <label>Valor máximo:</label>
                    <input type = {"number"}/>
                    <label>Busca por nome:</label>
                    <input />
                </div>
            </BarraEsquerda>
        )
    }
}