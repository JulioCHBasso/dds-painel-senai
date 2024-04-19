let sites = [
    { id: 1, name: "senai", site: "https://senaies.com.br/" },
    { id: 2, name: "developer", site: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_operator" },
    { id: 3, name: "w3schools", site: "https://www.w3schools.com/js/" }


]
class SitesController {

    
    //Mostra a lista de sites
    painel(req, res) {
        res.sendFile("painel.html", { root: `./public` })
    }

    lateral(req,res){
        res.sendFile("lateral.html",{ root: `./public`})
    }


    index(req, res) {
        console.debug("GET :: /sites")
        return res.json(sites)
    }
   

    show(req, res) {
        const id = parseInt(req.params.id)
        console.debug("GET :: /sites/:id")
        const site = sites.find((site) => {

            return site.id === id

        })
        /*  let status =""
      if(site){
          status = 200;
      }else{
          status= 404;
      }
      */
        let status = sites ? 200 : 404

        return res.status(status).json(site)
    }

    create(req, res) {
        const { name, site } = req.body
        const id = sites[sites.length - 1].id + 1
        const newSite = {
            id: id,
            name: name,
            site: site
        }
        sites.push(newSite)


        return res.status(201).json(newSite)
        console.debug("POST :: /sites")
    }

    update(req, res) {
        let id = parseInt(req.params.id)
        const { name, site } = req.body
        const index = sites.findIndex((site) => {
            return site.id === id
        })
        const status = index >= 0 ? 200 : 400
        if (index >= 0) {
            sites[index] = { id: id, name: name, site: site }
        }

        return res.status(status).json(sites[index])
        console.debug("PUT :: /sites")
    }

    destroy(req, res) {
        const id = parseInt(req.params.id)

        const index = sites.findIndex((site) => {
            return site.id === id
        })
        const status = index >= 0 ? 200 : 404

        if (index >= 0) {
            sites.splice(index, 1)
        }

        return res.status(status).json()
        console.debug("DELETE :: /sites")
    }


}

module.exports = new SitesController()

