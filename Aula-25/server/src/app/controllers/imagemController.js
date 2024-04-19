
const Imagem = require("../models/imagem")
class ImagemController {
    
    index(req,res){
        console.debug("/imagem")
        Imagem.mostrarTodos().then(
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

    create(req, res) {
        let nomeImagem = req.files.imagem.name
        let alternativo = req.body.alternativo
        //separando extensão do arquivo
        nomeImagem = nomeImagem.split(".")
        //pegando extensão
        let extensao = nomeImagem[nomeImagem.length - 1]
        if (extensao ==="jpg"){
        nomeImagem = new Date().getTime() + "." + extensao
        let arquivo = req.files.imagem

        Imagem.inserir(arquivo,alternativo,nomeImagem).then(
            resposta=>{
               // res.status(resposta[0]).json(resposta[1])
               res.redirect("./imagem")

            }
        ).catch(
            resposta=>{
                console.debug(resposta[1])
                res.status(resposta[0]).json(resposta[1].errno)
            }

        )
      //  res.json()

    }else {
        //erro 415 é tipo de arquivo não suportado
        res.status(415).json({message:"Tipo de Arquivo nao suportado"})

    }



}

update(req,res){
   let imagem_id = parseInt(req.params.imagem_id)
   let alternativo = req.body.alternativo
   let caminho = req.body.caminho
   
    Imagem.atualizarImagem(imagem_id,alternativo,caminho).then(
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

delete(req,res){
    let imagem_id = parseInt(req.params.imagem_id)
    Imagem.deleteImagem(imagem_id).then(

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
module.exports = new ImagemController()