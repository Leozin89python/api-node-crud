const express = require('express')
const app = express()

const { uuid } = require('uuidv4')

const port = 3000

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

let produtos = []

                /**CRUD */

/**read*/
app.get('/',(req, res)=>{
    /**obtém corretamente */
    return res.json(produtos)
})

/**insert*/
app.post('/',(req,res)=>{
    /**inseri corretamente */
   const id = uuid()

    const {item, preco, quantidade} = req.body
    const prod = {
        id,
        item,
        preco,
        quantidade
    }

    produtos.push(prod)
    return res.json(prod)
})

/**update*/
app.put('/:id', (req,res)=>{
    /**está alterando mas não atualiza no metodo GET */
    const { id } = req.params
    const { item, preco, quantidade } = req.body

    const prod = {
        id,
        item,
        preco,
        quantidade
    }

    const retornaItem = produtos.findIndex(items => {
        items.item  == item
        if(item < 0){
            return res.status(404).json({msg:'item não encontrado!'})
        }
    })

    produtos[retornaItem] = prod
    return res.json(prod)
})

/**delete */
app.delete('/:id',(req,res)=>{
    const { id } = req.params
/**está excluindo errado, exclui tudo mesmo com id inválido */
   
    let retornaItem = produtos.findIndex(items => items.id === id)
    if(retornaItem < 0){
        return res.status(404).json({msg:'item não encontrado!'})    
    }
  
    produtos.splice(retornaItem,1)
    return res.json({msg:'item excluido com sucesso!'})
})

app.listen(port,()=>{
    console.log(`online in port ${port}`)
})
