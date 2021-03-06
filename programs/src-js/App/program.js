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
==========================================================================================
C:


#include <stdio.h>
int main(void){
    
    printf("================================= \n");
    printf("    Logic exercise with C  \n");
    printf("================================= \n");
    
    int numero = 1;
    int numero_2 = 3;
    int total = numero + numero_2;

    printf("número 1: %d \n",numero);
    printf("número 1: %d \n",numero_2);
    printf("soma: %d \n", total);
    
    printf("================================= \n");
    
    int max = 3;
    int min = 0;
    
    while(min < max){
        min++;
        printf("%d \n",min);
    }
    printf("================================= \n");
    
   int number1 = 3;
    
    for(int number2 = 0; number2 < number1; number2++){
        printf("%d \n", number2);
    }

    printf("================================= \n");
    
     char veryOrNotVery = 'y';
     char resp = 'y';
     if(resp == veryOrNotVery){
         printf("true \n");
     }else{
         printf("false \n ");
     }
    
    printf("================================= \n");
    
    char terminator = 'y';
    char war        = 'n';
    
    while(war == terminator){
        printf("bang bang!\n");
          printf("splash!\n");
            printf("pow!\n");
    }
    
    printf("================================= \n");
    
   return 0;
}