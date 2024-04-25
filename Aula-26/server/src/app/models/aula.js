const mysql = require("mysql2")
const dbConfig = require("../config")


//diretorio do script sendo executado
const caminhoServer = require("path")
const { rejects } = require("assert")

class Aula{
    constructor() {
        this.conexao = mysql.createConnection(dbConfig.db)

    }
    inserirAula(aulas){
        return new Promise((resolve, rejects) => {
            console.log(aulas.chave_entregue);
            let sql = `INSERT INTO aulas (cod_Instrutor,instrutor,turma,data,Hora_inicio,hora_fim,unidade_curricular,tipo,ambiente,turno,chave_entregue)value("${aulas.cod_Intrutor}","${aulas.instrutor}","${aulas.turma}","${aulas.data}","${aulas.Hora_inicio}","${aulas.hora_fim}","${aulas.unidade_curricular}","${aulas.tipo}","${aulas.ambiente}","${aulas.turno}","${aulas.chave_entregue}")`
        // let sql = `INSERT INTO aulas (cod_instrutor,instrutor)value("${aulas.cod_Intrutor}","${aulas.instrutor}")`  
          this.conexao.query(sql, (erro, retorno) => {
                if (erro)rejects([400,erro]) // erro

                
                //arquivo.mv({root,"public/img"}+nomeImagem)
                resolve([201,"Inserido"])
            })
        })

    }
    mostrarAulas(){
        return new Promise((resolve,reject)=>{
            let sql = `SELECT * FROM aulas`
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro) rejects([400,erro])

                resolve([200,retorno])

            })

        })
    }

    atualizarAula(aulas){
        return new Promise((resolve,reject)=>{
            
            let sql = `UPDATE aulas SET cod_instrutor="${aulas.cod_Intrutor}" , instrutor ="${aulas.instrutor}", turma="${aulas.turma}",data ="${aulas.data}" ,Hora_inicio="${aulas.Hora_inicio}" , hora_fim ="${aulas.hora_fim}" ,unidade_curricular="${aulas.unidade_curricular}" , tipo ="${aulas.tipo}" ,ambiente="${aulas.ambiente}" , turno ="${aulas.turno}" , chave_entregue ="${aulas.chave_entregue}"  where aula_id = "${aulas.aula_id}" `
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro) reject([400,erro])

                resolve([200,retorno])


            })
        })


    }

    deleteAula(aula_id){
        return new Promise((resolve,rejects)=>{
            let sql = `delete from aulas where aula_id = ${aula_id}`
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro)rejects([400,erro])

                resolve([200,"Deletado com sucesso"])
            })
        })

    }



}

module.exports = new Aula();
