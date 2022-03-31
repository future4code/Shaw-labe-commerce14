import React from "react";
import styled from "styled-components";

const BarraDireita = styled.div`
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
    }

    p {
        margin-left: 1em;
    }
`

export default class Carrinho extends React.Component{
    render(){
        return(
            <BarraDireita>
                <h3>Carrinho:</h3>
                <div>
                    <p>*produtos</p>
                </div>
                <p>Valor total:</p>
            </BarraDireita>
        )
    }
}