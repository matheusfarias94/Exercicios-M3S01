import axios from "axios";
import { createContext, useState } from "react";

export const CadastroContext = createContext();

export const CadastroProvider = ({ children }) => {
  const [cadastro, setCadastro] = useState(null);

  async function criarUsuario(
    nome,
    email,
    senha,
    cpf,
    sexo,
    endereco,
    dataNascimento
  ) {
    try {
      const response = await axios.post("http://localhost:3000/usuario", {
        nome,
        email,
        senha,
        cpf,
        sexo,
        endereco,
        dataNascimento,
      });

      setCadastro(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CadastroContext.Provider value={{ criarUsuario, cadastro }}>
      {children}
    </CadastroContext.Provider>
  );
};
