import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";
export default function CadastrCategoria() {
  const categoriaInicial = {
    nome: "",
    descricao: "",
    cor: "#ffffff",
  };

  const [value, setValue] = useState(categoriaInicial);
  const [categorias, setCategorias] = useState([]);

  function handleChange(event) {
    // console.log(event.target.getAttribute("name"));
    // const { getAttribute, value } = event.target;
    setValues(event.target.getAttribute("name"), event.target.value);
  }

  function setValues(chave, valor) {
    setValue({
      ...value,
      [chave]: valor,
    });

    console.log(valor);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setCategorias([...categorias, value]);

    setValues(categoriaInicial);
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {value.nome}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <FormField
            type="text"
            name="nome"
            onChange={handleChange}
            value={value.nome}
          >
            Nome da Categoria
          </FormField>
        </div>
        <div>
          <FormField
            type="textArea"
            name="descricao"
            onChange={handleChange}
            value={value.descricao}
          >
            Descrição
          </FormField>
        </div>
        <div>
          <FormField
            type="color"
            name="cor"
            onChange={handleChange}
            value={value.cor}
          >
            Cor
          </FormField>
        </div>
        <button> Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return <li key={index}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Home</Link>
    </PageDefault>
  );
}
