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



export default class Produtos extends React.Component{
    render(){
        return(
            <PaginaCentral>
                <div className="head">
                    <p>Quantidade de Produtos:XXX</p>
                    <div className="ordenacao">
                        <p>Ordenação:</p>
                        <select>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </div>
                </div>
                <div className="produtos">
                <Card />
                </div>
            </PaginaCentral>
        )
    }
}