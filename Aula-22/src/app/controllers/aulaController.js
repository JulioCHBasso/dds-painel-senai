const Aula = require("../models/aula");


class AulaController {
    aulas(req,res){
        res.sendFile("inserirAulas.html",{ root: `./public`})
    }


    create(req, res) {
        let aulas = new Object();
            aulas.cod_Intrutor = req.body.cod_Intrutor;
            aulas.instrutor= req.body.instrutor;
            aulas.turma= req.body.turma;
            aulas.data = req.body.data;
            aulas.hora_inicio = req.body.hora_inicio;
            aulas.hora_fim = req.body.hora_fim;
            aulas.unidade_curricular = req.body.unidade_curricular;
            aulas.tipo = req.body.tipo;
            aulas.ambiente = req.body.ambiente;
            aulas.turno = req.body.turno;
            aulas.chave_entregue = req.body.chave_entregue;

            
       
            Aula.inserirAula(aulas).then(
                resposta => {
                    
                     res.status(resposta[0]).json(resposta[1])
                    //res.redirect("./aula")

                }
            ).catch(
                resposta => {
                    console.debug(resposta[1])
                    res.status(resposta[0]).json(resposta[1].errno)
                }

            )
            //  res.json()

        



    }

    indexAula(req, res) {
        Aula.mostrarAulas().then(
            resposta => {
                res.status(resposta[0]).json(resposta[1])


            }
        ).catch(
            resposta => {
                console.debug(resposta[1])
                res.status(resposta[0]).json("erro" + resposta[1].errno)
            }
        )
    }
    updateAula(req,res){
        let aulas = new Object();
        aulas.aula_id = req.params.aula_id
        aulas.cod_Intrutor = req.body.cod_Intrutor;
        aulas.instrutor= req.body.instrutor;
        aulas.turma= req.body.turma;
        aulas.data = req.body.data;
        aulas.hora_inicio = req.body.hora_inicio;
        aulas.hora_fim = req.body.hora_fim;
        aulas.unidade_curricular = req.body.unidade_curricular;
        aulas.tipo = req.body.tipo;
        aulas.ambiente = req.body.ambiente;
        aulas.turno = req.body.turno;
        aulas.chave_entregue = req.body.chave_entregue;
        Aula.atualizarAula(aulas).then(
             resposta=>{
                 res.status(resposta[0]).json(resposta[1])
              }
          ).catch(
              resposta =>{
                  console.debug(resposta[1])
                  res.status(resposta[0]).json("erro"+resposta[1].errno)
              }
          )
     
     }

     deleteaula(req,res){
        let aula_id = parseInt(req.params.aula_id)
        Aula.deleteAula(aula_id).then(
    
            resposta=>{
                res.status(resposta[0]).json(resposta[1])
               
                 
             }
         ).catch(
             resposta =>{
                 console.debug(resposta[1])
                 res.status(resposta[0]).json("erro"+resposta[1].errno)
             }
         )
    
    }
    





}



module.exports = new AulaController();