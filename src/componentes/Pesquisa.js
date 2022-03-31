import React from "react"
import styled from "styled-components"


const BarraEsquerda = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    border-style: solid;
    height: 500px;
    


        input{
            margin-bottom: 0.5em;
        }

        h3{
            margin: 1em;
        }
        div{
            width: 80%;
            align-self: center;
        }
`



export default class Pesquisa extends React.Component{
    state ={
        valorMinimo : "",
        valorMaximo : ""
    }

    trocaValorMin =(event) =>{
        this.setState({valorMinimo:event.target.value})
    }
    trocaValorMax =(event) =>{
        this.setState({valorMaximo:event.target.value})
    }

    


    render(){
        

        
        return(
            <BarraEsquerda>
                <h3>Filtros</h3>
                <div>
                <label>Valor mínimo:</label>
                <input 
                value={this.state.valorMinimo}
                onChange={this.trocaValorMin}
                
                />
                <label>Valor máximo:</label>
                <input 
                value={this.state.valorMaximo}
                onChange={this.trocaValorMax}
                />
                <label>Busca por nome:</label>
                <input />
                </div>
                
            </BarraEsquerda>
            
        )
    }
}