const {DataTypes} = require('sequelize');
const connection = require('../database/connection');
const {hashSync} = require('bcryptjs');

const Usuario = connection.define('usuarios', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    dataNascimento: {
        type: DataTypes.STRING,
        allowNull: false
    }

}) 
Usuario.beforeSave((usuario) => {
    const hash = hashSync(usuario.senha, 10)
    usuario.senha = hash
    return hash
})
module.exports = Usuario
