const express = require("express")
const routes = express.Router();

const aula = require(`./app/controllers/aulaController`)
const imagem = require(`./app/controllers/imagemController`)
const sites = require("./app/controllers/sitesController")
const Usuario = require("./app/controllers/UsuarioController")

//const {Router} = require("express")
//const routes = new router()
routes.post("/imagem",imagem.create)

routes.get("/imagem",imagem.index)

routes.put("/imagem/:imagem_id",imagem.update)

routes.delete("/imagem/:imagem_id",imagem.delete)

routes.get("/lateral",sites.lateral)

routes.get("/",sites.painel)

routes.get("/sites",sites.index)

routes.get("/sites/:id",sites.show)

routes.post("/sites",sites.create)

routes.put("/sites/:id",sites.update)

routes.delete("/sites/:id",sites.destroy)

routes.get("/aulas",aula.aulas)

routes.post("/aula",aula.create)

routes.get("/indexAula",aula.indexAula)

routes.put("/aulas/:aula_id",aula.updateAula)

routes.delete("/aula/:aula_id",aula.deleteaula)

routes.post("/usuario",Usuario.create)

routes.post("/logar",Usuario.logar)

//routes.get("/usuarios",Usuario.verificaToken,Usuario.index)

routes.get("/usuarios",Usuario.index)

routes.get("/index/:usuario_id",Usuario.show)






module.exports = routes