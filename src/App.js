import React from 'react';
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa';
import Carrinho from './componentes/Carrinho';
import {Produtos, produtos} from './componentes/Produtos';

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

export default class App extends React.Component{
  
  state ={
    minFilter: "",
    maxFilter: "",
    nomeFilter: "",
    produtos: produtos,
    produtosCarrinho:[]
    
  }

  const 


  onChangeMin = (event) => {
    this.setState({ minFilter: event.target.value })
  }

  onChangeMax = (event) => {
    this.setState({ maxFilter: event.target.value })
  }

  onChangeNome = (event) => {
    this.setState({ nomeFilter: event.target.value })
  }
  recuperaProdutos = (elemento) =>{
    this.setState({produtosCarrinho : elemento})
}

  render(){

    const listalista = this.state.produtosCarrinho

    const listFilter = this.state.produtos
    .filter(produto => 
      this.state.minFilter === "" || produto.value >= this.state.minFilter
    )
    .filter(produto => 
      this.state.maxFilter === "" || produto.value <= this.state.maxFilter
    )
    .filter(produto => 
      this.state.nomeFilter === "" || produto.name.includes(this.state.nomeFilter)
    )
    

  console.log(listalista)  
    return (
      <MainContainer>

        <Pesquisa
          minFilter = {this.state.minFilter}
          maxFilter = {this.state.maxFilter}
          nomeFilter = {this.state.nomeFilter}
          onChangeMin = {this.onChangeMin}
          onChangeMax = {this.onChangeMax}
          onChangeNome = {this.onChangeNome}
        />

        <Produtos 
          minFilter = {this.state.minFilter}
          maxFilter = {this.state.maxFilter}
          nomeFilter = {this.state.nomeFilter}
          produtos = {listFilter}
          recupera = {this.recuperaProdutos}
        />

        <Carrinho 
          lista = {listalista}
        />
      </MainContainer>
    )
  }
}