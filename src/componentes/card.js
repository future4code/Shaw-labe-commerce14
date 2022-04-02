import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20vw;
    height: 40vh;
    border: 1px solid black;
    border-radius: 16px;
    margin: 0 0.5em;
    
    img{
        width: 100%;
        height: 60%;
        border-radius: 16px 16px 0 0;
    }

    h4, p {
        margin: 0 1em;
    }

    button {
        align-self: center;
    } 
`

export default class Card extends React.Component{

    render(){

        return (
            <Item>
                <img src={this.props.linkDaImagem} />
                <h4>{this.props.nomeDoProduto}</h4>
                <p>R$ {this.props.valorDoProduto}</p>
                <button>Adicionar ao Carrinho</button>
            </Item>
        )
    }
}

