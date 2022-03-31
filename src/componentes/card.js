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
                <img src="https://i0.wp.com/fatosdesconhecidos.com.br/wp-content/uploads/2019/06/Elon-Falcon-Heavy.jpg?resize=1000,500" />
                <h4>Produto XXX</h4>
                <p>R$ 100,00</p>
                <button>Adicionar ao Carrinho</button>
            </Item>
        )
    }
}

