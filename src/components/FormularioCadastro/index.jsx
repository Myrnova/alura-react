import React from 'react';

const FormularioCadastro = () => {
    return(
        <form>
        <input type="text" placeholder="Titulo"></input>
        <textarea placeholder="Escreva sua nota"/>
        <button>
          Criar Nota
        </button> 
      </form>  
    )
}

export default FormularioCadastro