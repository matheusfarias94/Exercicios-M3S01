const {Router} = require("express");
const usuarioController = require("../controllers/UsuarioController");

const usuarioRoutes = new Router();

usuarioRoutes.post("/", usuarioController.criarUsuario);
usuarioRoutes.get("/", usuarioController.listarUsuarios);
module.exports = usuarioRoutes