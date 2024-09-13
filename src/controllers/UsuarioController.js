const Usuario = require("../models/Usuario");
const regexEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

class UsuarioController {
  async criarUsuario(req, res) {
    try {
      const { nome, email, senha, cpf, sexo, endereco, dataNascimento } =
        req.body;
      if (
        !nome ||
        !email ||
        !senha ||
        !cpf ||
        !sexo ||
        !endereco ||
        !dataNascimento
      ) {
        return res
          .status(400)
          .json({ error: "Todos os campos são obrigatórios!" });
      }

      if (!regexEmail.test(email)) {
        return res.status(400).json({ error: "Email inválido!" });
      }
      if (cpf.length < 11 || cpf.length > 11) {
        return res.status(400).json({ error: "CPF inválido!" });
      }
      if (dataNascimento.length < 10 || dataNascimento.length > 10) {
        return res.status(400).json({ error: "Data inválida!" });
      }
      if (
        sexo.toLowerCase() !== "masculino" &&
        sexo.toLowerCase() !== "feminino"
      ) {
        return res
          .status(400)
          .json({ error: "Sexo inválido,precisa ser masculino ou feminino" });
      }
      if (senha.length < 8 || senha.length > 16 || senha.includes(" ")) {
        return res.status(400).json({
          error:
            "Senha deve ter entre 8 e 16 caracteres e não pode conter espaços!",
        });
      }

      const usuarioExistente = await Usuario.findOne({ where: { email, cpf } });

      if (!usuarioExistente) {
        return res.status(409).json({ error: "Email ou CPF já existentes!" });
      }

      const novoUsuario = await Usuario.create({
        nome,
        email,
        senha,
        cpf,
        sexo,
        endereco,
        dataNascimento,
      });
      return res.status(201).json(novoUsuario);
    } catch (error) {
      return res.status(500).json({ mensagem: "Erro ao criar usuário", error });
    }
  }
  async listarUsuarios(req, res) {
    try {
      const usuarios = await Usuario.findAll({ attributes: ["nome"] });
      const usuariosNome = usuarios.map((usuario) => usuario.nome);

      return res.status(200).json(usuariosNome);
    } catch (error) {
      return res
        .status(500)
        .json({ mensagem: " Erro ao buscar usuários", error });
    }
  }
}
module.exports = new UsuarioController();
