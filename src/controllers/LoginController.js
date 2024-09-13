const Usuario = require("../models/Usuario");
const {compareSync} = require("bcryptjs");
const {sign} = require("jsonwebtoken");

class LoginController {
    async login(req, res) {
      try {
        const { email, senha } = req.body;
  
        if (!email || !senha) {
          return res
            .status(400)
            .json({ error: "Email e senha precisam ser informados!" });
        }
  
        const usuarioLogin = await Usuario.findOne({ where: { email } });
        if (!usuarioLogin) {
          return res.status(400).json({ error: "Usuário não encontrado" });
        }
        const senhaValida = compareSync(senha, usuarioLogin.senha);
        if (!senhaValida) {
          return res.status(400).json({ error: "Senha inválida" });
        }
  
        const token = sign({ id: usuarioLogin.id,nome:usuarioLogin.nome }, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });
  
        return res.json({  nomeUsuario: usuarioLogin.nome,token });
      } catch (error) {
        res.status(500).json({ mensagem: " Erro ao realizar login", error });
      }
    }
  }
  
  module.exports = new LoginController();