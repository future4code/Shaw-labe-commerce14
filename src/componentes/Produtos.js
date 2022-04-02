import React from "react";
import styled from "styled-components";
import Card from "./Card";

const PaginaCentral = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;

        .head{
            display: flex;
            justify-content: space-between;
        }

        .ordenacao{
            display: flex;
            align-items: center;
        }
        .produtos{
            display: flex;
        }
`

export const produtos = [
    {
        id: Date.now(),
        name: "b",
        value: 1000000.0,
        imageUrl: "https://picsum.photos/200/200",
        qnt: 0
    },
    {
        id: Date.now(),
        name: "a",
        value: 10.0,
        imageUrl: "https://picsum.photos/200/200",
        qnt: 0
    },
    {
        id: Date.now(),
        name: "c",
        value: 100.0,
        imageUrl: "https://picsum.photos/200/200",
        qnt: 0
    },
    {
        id: Date.now(),
        name: "e4",
        value: 1000.0,
        imageUrl: "https://picsum.photos/200/200",
        qnt: 0
    }
]

export class Produtos extends React.Component {
    //botar produtos em APP.JS para fazer o controle de renderização dos cards.
    state = {
        ordenar: "Nenhum"
    }

    onChangeOrdenar = (event) => {
        this.setState({ ordenar: event.target.value })
    }

    render(){

        if (this.state.ordenar === "Crescente"){

            this.props.produtos.sort((a,b)=>{
                if (a.value > b.value){
                    return 1
                }
                if (b.value > a.value){
                    return -1
                }
                return 0
            })
        }

        if (this.state.ordenar === "Decrescente"){

            this.props.produtos.sort((a,b)=>{
                if (a.value > b.value){
                    return -1
                }
                if (b.value > a.value){
                    return 1
                }
                return 0
            })
        }

        const listFilter = this.props.produtos
        .filter(produto => 
            produto.value >= this.props.minFilter
        )
        .filter(produto => 
            produto.value <= this.props.maxFilter
        )
        .filter(produto => 
            produto.name.includes(this.props.nomeFilter)
        )
        
        let renderizaCards;
        {listFilter.length ? renderizaCards = listFilter : renderizaCards = this.props.produtos}
        
        const listCards = renderizaCards.map((elemento) => {
            return(
                <Card 
                    nomeDoProduto = {elemento.name}
                    linkDaImagem = {elemento.imageUrl}
                    valorDoProduto = {elemento.value}
                />
            )
        })

        return (
            <PaginaCentral>
                <div className="head">
                    <p>Quantidade de Produtos: {this.props.produtos.length}</p>
                    <div className="ordenacao">
                        <p>Ordenação: </p>
                        <select value={this.state.ordenar} onChange={this.onChangeOrdenar}>
                            <option>Nenhum</option>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </div>
                </div>

                <div className="produtos" >
                    {listCards}
                </div>
            </PaginaCentral>
        )
    }
}