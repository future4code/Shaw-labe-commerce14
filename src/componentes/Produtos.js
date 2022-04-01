import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Pesquisa from "./Pesquisa";

const PaginaCentral = styled.div`
    display: flex;
    flex-direction: column;

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

export default class Produtos extends React.Component {

    state = {
        produtos: [
            {
                id: Date.now(),
                name: "b",
                value: 1000000.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: Date.now(),
                name: "a",
                value: 10.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: Date.now(),
                name: "c",
                value: 100.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: Date.now(),
                name: "e4",
                value: 1000.0,
                imageUrl: "https://picsum.photos/200/200",
            }
        ],
        filtro: "Nenhum",
        pesquisa: ""
    }

    setFiltro = (event) => {
        this.setState({
            filtro: event.target.value
        })
    }

    // updatePesquisa = (event) => {
    //     this.setState ({
    //         pesquisa: event.target.value
    //     })
    // }

    render(){

        if (this.state.filtro === "Crescente"){

            this.state.produtos.sort((a,b)=>{
                if (a.value > b.value){
                    return 1
                }
                if (b.value > a.value){
                    return -1
                }
                return 0
            })
        }

        if (this.state.filtro === "Decrescente"){

            this.state.produtos.sort((a,b)=>{
                if (a.value > b.value){
                    return -1
                }
                if (b.value > a.value){
                    return 1
                }
                return 0
            })
        }

        const listCards = this.state.produtos
        // .filter(produto => {
        //     return produto.name.includes(this.state.pesquisa)
        // })
        .map((elemento) => {
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
                    <p>Quantidade de Produtos:{this.state.produtos.length}</p>
                    <div className="ordenacao">
                        <p>Ordenação:</p>
                        <select value={this.state.filtro} onChange={this.setFiltro}>
                            <option>Nenhum</option>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </div>
                    {/* <div>
                        <label>Busca por nome:</label>
                        <input placeholder="Pesquisa"
                        value={this.state.pesquisa}
                        onChange={this.updatePesquisa}
                        />
                    </div> */}
                </div>

                <div className="produtos">
                    {listCards}
                </div>
            </PaginaCentral>
        )
    }
}