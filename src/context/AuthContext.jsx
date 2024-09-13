import { createContext, useState } from "react";
import axios from "axios";

// Criação do contexto de autenticação
export const AuthContext = createContext();

// Provedor de Autenticação
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null); // Estado para armazenar erros

  // Função para login
  const login = async (email, senha) => {
    try {
      setError(null); // Limpa o erro anterior antes de tentar o login
      const response = await axios.post("http://localhost:3000/login", {
        email,
        senha,
      });
      localStorage.setItem("token", response.data.token);
      setUser(response.data);
      window.location.href = "/";
    } catch (err) {
      console.log(err);
      if (!email || !senha) {
        setError("Email e senha precisam ser informados!");
      } else {
        setError("Erro ao tentar realizar login. Tente novamente.");
      }
      
    }
  };

  // Função para logout
  const logout = () => {
    try {
      localStorage.removeItem("token");
      setUser(null);
      window.location.href = "/login";
    } catch (err) {
      console.log(err);
      setError("Erro ao tentar realizar logout. Tente novamente.");
    }
  };

  // Função para verificar se o usuário está autenticado
  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      return false;
    }
  };

  // Provedor do contexto de autenticação
  return (
    <AuthContext.Provider value={{ login, logout, user, checkToken, error }}>
      {children}
    </AuthContext.Provider>
  );
};
