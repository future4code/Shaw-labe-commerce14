import React from 'react';
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa';
import Carrinho from './componentes/Carrinho';
import Produtos from './componentes/Produtos';

const Aplicativo = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`

export default class App extends React.Component{

  render(){
    return (
      <Aplicativo>
        <Pesquisa />
        <Produtos />
        <Carrinho />
      </Aplicativo>
    )
  }
}

