import React from "react";
import styled from "styled-components";

const BarraEsquerda = styled.div`
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-color: black;
    width: 200px;
    height: 500px;
`

export default class Carrinho extends React.Component{
    render(){
        return(
            <BarraEsquerda>
              <h3>Carrinho:</h3>
                <div>
                    <p>*produtos</p>
                </div>
                <p>Valor total:</p>
            </BarraEsquerda>
        )
    }
}