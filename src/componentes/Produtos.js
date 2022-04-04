import React from "react";
import styled from "styled-components";
import Card from "./card"
import Carrinho from "./Carrinho";

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
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
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
        name: "e5",
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
    
    state = {
        ordenar: "Nenhum",
        produtosCarrinho:[],
        
    }

    //produtos = []

    onChangeOrdenar = (event) => {
        this.setState({ ordenar: event.target.value })
    }

    recuperaCarrinho = (novo) =>{
        //this.produtos.push(elemento)

        this.props.recupera(novo)
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
        
        const listCards = this.props.produtos.map((elemento) => {

            return(
                <Card 
                    nomeDoProduto = {elemento.name}
                    linkDaImagem = {elemento.imageUrl}
                    valorDoProduto = {elemento.value}
                    idProduto = {elemento.id}
                    recupera = {this.recuperaCarrinho}
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