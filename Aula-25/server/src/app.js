const express = require('express')
const routes = require("./routes")
const fileupload = require("express-fileupload")
const ImagemController = require("./app/controllers/imagemController")
//const server =require("/server")

class App{
    constructor(){
        this.server = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        //Middleware para analisar json no corpo das requisiçoes
        this.server.use(express.json())

        //Comando que permite acessar diretorio com arquivos staticos
        this.server.use(express.static("public"))
        
        // fazer uso do file upload
        this.server.use(fileupload())

        this.server.use(express.urlencoded({extended:false}))
    }
    routes(){
        this.server.use(routes)
    }


}
//const App = new App()
module.exports = new App().server
