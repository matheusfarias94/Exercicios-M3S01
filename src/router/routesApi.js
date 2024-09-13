const { Router } = require("express");
const loginRoutes = require("./login.routes");
const usuarioRoutes = require("./usuarios.routes");
const routes = new Router();

routes.use("/login", loginRoutes);
routes.use("/usuario", usuarioRoutes);

module.exports = routes;
