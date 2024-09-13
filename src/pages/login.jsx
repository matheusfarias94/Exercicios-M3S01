import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function PaginaLogin() {
  const { login,error } = useContext(AuthContext);
  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });

  async function realizarLogin() {
    await login(usuario.email, usuario.senha);
  }

  return (
    <div>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={usuario.email}
        onChange={(evento) =>
          setUsuario({ ...usuario, email: evento.target.value })
        }
      />
      <input
        type="password"
        placeholder="Senha"
        value={usuario.senha}
        onChange={(evento) =>
          setUsuario({ ...usuario, senha: evento.target.value })
        }
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={() => realizarLogin()}>Entrar</button>
      <button onClick={() => window.location.href = "/cadastro"}>Cadastrar</button>
    </div>
  );
}

export default PaginaLogin;
