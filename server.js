require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./src/database/connection");
const routes = require("./src/router/routesApi.js");
const PORT_API = process.env.PORT_API;

class Server {
  constructor(server = express()) {
    this.middlewares(server);
    this.database();
    server.use(routes);
    this.initializeServer(server);
  }
  async middlewares(server) {
    server.use(cors());
    server.use(express.json());
  }
  async database() {
    try {
      await connection.authenticate();
      console.log("Conectado ao banco de dados");
    } catch (error) {
      console.log("Erro ao conectar ao banco de dados", error);
    }
  }
  async initializeServer(server) {
    server.listen(PORT_API, () => {
      console.log(`Servidor iniciado na porta ${PORT_API}`);
    });
  }
}
new Server();
