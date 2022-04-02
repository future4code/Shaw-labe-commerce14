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
    produtos: produtos
  }

  onChangeMin = (event) => {
    this.setState({ minFilter: event.target.value })
  }

  onChangeMax = (event) => {
    this.setState({ maxFilter: event.target.value })
  }

  onChangeNome = (event) => {
    this.setState({ nomeFilter: event.target.value })
  }

  render(){

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
          produtos = {this.state.produtos}
        />

        <Carrinho 
          
        />
      </MainContainer>
    )
  }
}