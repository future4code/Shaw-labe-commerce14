import React from "react";
import styled from "styled-components";
import Card from "./card";

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
        filtro: ""
    }

    filterCrescente = () => {

            const arrayOrdenado = this.state.produtos.sort(function(a, b) {
                if(a.value < b.value) {
                    return -1;
                } else {
                    return true;
                }
            })

            this.setState ({produtos: arrayOrdenado})
        
    }

    filterDecrescente = () => {

        const arrayOrdenado = this.state.produtos.sort(function(a, b) {
            if(a.value < b.value) {
                return 1;
            } else {
                return false;
            }
        })

        this.setState ({produtos: arrayOrdenado})
    
}

onChangeFilter = () => {
    let valor

    if (this.state.filtro === "Crescente"){
        valor = this.filterCrescente
    } else {
        valor = this.filterDecrescente
    }
    
    return valor
}

    setFiltro = (event) => {
        this.setState({
            filtro: event.target.value
        })
    }

render(){

    const listCards = this.state.produtos.map((elemento) => {
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
                <p>Quantidade de Produtos:XXX</p>
                <div className="ordenacao">
                    <p>Ordenação:</p>
                    <select value={this.state.filtro} onChange={this.onChangeFilter}>
                        <option value="Crescente">Crescente</option>
                        <option value="Decrescente">Decrescente</option>
                    </select>
                </div>
            </div>

            <div className="produtos">
                {listCards}
            </div>
        </PaginaCentral>
    )
}
}