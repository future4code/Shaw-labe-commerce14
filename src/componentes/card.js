import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
    border-style: double;
    border-width: 2px;
    border-color: black;
    width: 200px;
    height: 300px;

        img{
            width: 200px;
            height: 150px;
        }

`


export default class Card extends React.Component{

    render(){

        return (
            <Item>
                <img src={this.props.linkDaImagem} />
                <h4>{this.props.nomeDoProduto}</h4>
                <p>{this.props.valorDoProduto}</p>
                <button>Adicionar ao Carrinho</button>
            </Item>
        )
    }
}

