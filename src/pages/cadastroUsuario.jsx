import { useContext, useState } from "react";
import { CadastroContext } from "../context/CadastroContext";

function CadastrarUsuario() {
  const { criarUsuario } = useContext(CadastroContext);
  const [cadastro, setCadastro] = useState({
    nome: "",
    email: "",
    senha: "",
    cpf: "",
    sexo: "",
    endereco: "",
    dataNascimento: "",
  });
  async function realizarCadastro() {
    await criarUsuario(
      cadastro.nome,
      cadastro.email,
      cadastro.senha,
      cadastro.cpf,
      cadastro.sexo,
      cadastro.endereco,
      cadastro.dataNascimento

    );
    
  }

  return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <input
        type="text"
        placeholder="Nome"
        value={cadastro.nome}
        onChange={(e) => setCadastro({ ...cadastro, nome: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={cadastro.email}
        onChange={(e) => setCadastro({ ...cadastro, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Senha"
        value={cadastro.senha}
        onChange={(e) => setCadastro({ ...cadastro, senha: e.target.value })}
      />
      <input
        type="text"
        placeholder="CPF"
        value={cadastro.cpf}
        onChange={(e) => setCadastro({ ...cadastro, cpf: e.target.value })}
      />
      <input
        type="text"
        placeholder="Sexo"
        value={cadastro.sexo}
        onChange={(e) => setCadastro({ ...cadastro, sexo: e.target.value })}
      />
      <input
        type="text"
        placeholder="Endereço"
        value={cadastro.endereco}
        onChange={(e) => setCadastro({ ...cadastro, endereco: e.target.value })}
      />
      <input
        type="date"
        placeholder="Data de Nascimento"
        value={cadastro.dataNascimento}
        onChange={(e) =>
          setCadastro({ ...cadastro, dataNascimento: e.target.value })
        }
      />
      <button onClick={() => realizarCadastro()}>Cadastrar</button>
      <button onClick={() => (window.location.href = "/login")}>Voltar</button>
    </div>
  );
}

export default CadastrarUsuario;
