const mysql = require("mysql2")
const dbConfig = require("../config")
const ImagemController = require("../controllers/imagemController")
//diretorio do script sendo executado
const caminhoServer = require("path")
const { rejects } = require("assert")




class Imagem {
    constructor() {
        this.conexao = mysql.createConnection(dbConfig.db)

    }
    mostrarTodos(){
        return new Promise((resolve,reject)=>{
            let sql = `SELECT * FROM anuncios`
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro) rejects([400,erro])

                resolve([200,retorno])

            })

        })
    }

    atualizarImagem(imagem_id,alternativo,caminho){
        return new Promise((resolve,reject)=>{
            let sql = `UPDATE anuncios SET alternativo="${alternativo}" , caminho ="${caminho}"  where imagem_id = "${imagem_id}" `
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro) reject([400,erro])

                resolve([200,retorno])


            })
        })


    }

    inserir(arquivo, alternativo, nomeImagem) {
        return new Promise((resolve, rejects) => {
            let sql = `INSERT INTO anuncios (alternativo,caminho)value("${alternativo}","${nomeImagem}")`
            this.conexao.query(sql, (erro, retorno) => {
                if (erro)rejects([400,erro]) // erro

                arquivo.mv(caminhoServer + "/../public/img/" + nomeImagem)
                //arquivo.mv({root,"public/img"}+nomeImagem)
                resolve([201,"Inserido"])
            })
        })

    }

    deleteImagem(imagem_id){
        return new Promise((resolve,rejects)=>{
            let sql = `delete from anuncios where imagem_id = ${imagem_id}`
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro)rejects([400,erro])

                resolve([200,"Deletado com sucesso"])
            })
        })

    }

}

module.exports = new Imagem()