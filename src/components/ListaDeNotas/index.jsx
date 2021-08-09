import { Component } from "react";
import CardNota from "../CardNota";
export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
      {Array.of("Trabalho", "Trabalho", "Estudo").map((categoria, index) => {
         return(
         <li key={index}>
         <span>{categoria}</span>
          <CardNota />
        </li>  )})}
      </ul>
      );    
  }
}
