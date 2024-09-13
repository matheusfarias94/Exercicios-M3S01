const {Router} = require("express");
const loginController = require("../controllers/LoginController");
const loginRoutes = new Router()

loginRoutes.post("/", loginController.login)

module.exports = loginRoutes