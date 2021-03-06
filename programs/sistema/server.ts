import express = require('express')
const app = express()

const { uuid } = require('uuidv4')

const port :number = 3003

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

const hollywood = []

/**obtém os dados */
app.get('/movie',(req,res)=>{
    return res.status(200)
              .json(hollywood)
})




/**inseri os dados */
app.post('/movie',(req,res)=>{
    const id = uuid()

    /**DESESTRUCTURING */
    const { movie,
            director,
            year, 
            starring,  
            co_starring } = req.body

    
    const movieProduction = {
            id,
            movie, 
            director, 
            year, 
            starring, 
            co_starring
    }
 

    hollywood.push(movieProduction)
    return res.status(201)
              .json(movieProduction)

})




/**modifica um dado pelo id */
app.put('/movie/:id',(req,res)=>{
    const { id } = req.body

    const {
            movie,
            director,
            year, 
            starring,  
            co_starring
    } = req.body

    const movieProduction = {
            id,
            movie, 
            director, 
            year, 
            starring, 
            co_starring
    }


    const updateById = hollywood.findIndex(search => search.id === id)
    if(updateById < 0){
        return res.status(404)
                  .json({msg:'data not found!'})
    }

    hollywood[updateById] = movieProduction
    return res.status(200)
              .json(movieProduction)
})





/**deleta um dado pelo id */
app.delete('/movie/:id', (req,res)=>{
    const { id } = req.body

    const deleteMovieById = hollywood
         .findIndex(search => search.id === id)
    if(deleteMovieById < 0){
        return res.status(404)
                  .json({msg:'data not found!'})
    }


    hollywood.splice(deleteMovieById, 1)
    return res.status(204)
              .json({msg:'data deleted OK!'})
})





app.listen(port,()=>{
    console.log(`online in port:${port}`)
})
