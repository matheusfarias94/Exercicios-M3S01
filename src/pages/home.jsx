import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { logout } = useContext(AuthContext);

  async function sair() {
    await logout();
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => sair()}>Sair</button>
      
    </div>
  );
}

export default Home;
