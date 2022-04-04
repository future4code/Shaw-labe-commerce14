import React from "react";
import styled from "styled-components";



const BarraDireita = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 80vh;
    border: 1px solid black;
    margin: 1em;

    h3{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        margin-left: 1em;
    }
    
    div{
        display: flex;
        flex-direction: column;
    }


`
const tabelaCarrinho = styled.div`
    display: flex;
    flex-direction: row;

`




export default class Carrinho extends React.Component{

    deletaElemento = (event) => {
        this.props.deleta(event.target.value)
    
    }
    
    render(){

        
        
        
        let soma = 0

        const carrinhoDeCompras = this.props.lista.map((elemento,index)=>{
            
            
            return (
            <tabelaCarrinho>
            <p>{elemento.nome} - {elemento.valor}</p>
             <button
             value={index}
             onClick={this.deletaElemento}
             >Deletar</button>
             </tabelaCarrinho>   
            )
        })
        
        

        const somaCarrinho = this.props.lista.map((elemento)=>{

            return soma+=elemento.valor
        })

        
        
        
        return(
            <BarraDireita>
                <h3>Carrinho De Compras</h3>
                <div>
                    <p>{carrinhoDeCompras}</p>
                </div>
               
                <p>Valor Total : {soma}</p>
            </BarraDireita>
        )
    }
}