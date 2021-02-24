"======================================================"
let objeto = {
    msg: String,
    val: String
}
"======================================================"
var valor :any
let numero :void
"======================================================"
function funcao (): void {

}
"======================================================"
function conversa (): String {
    let recado :String = 'isso é o ts'
    return recado
}
console.log(conversa())
"======================================================"
let baratino :boolean = false
"======================================================"
var tipos = [{
    contagem:Number,
    contado:Boolean,
    contaram:String,
    contem:JSON,
    contou:Response,
    contido:Request,
    conta:Function,
    contase:Object
}]
"======================================================"
let arr :number[] = [1,2,3,4,5]
let mapear  = arr.map(e  =>{
    return e * 3
})
console.log(mapear)
"======================================================"
class Algo {
    public x    :number
    public y    :number
    protected z :number
    private a   :number
}
console.log(mapear)
"======================================================"
class Fala{
    msg :String
    constructor(msg :String){
        this.msg = msg
    }
}
"======================================================"
let numbersAndCodeAndValues = {
    valor : 1245,
    msg : 'alright',
    verdade : true,
    resposta : function(){
        let msg :String = 'mensagem' 
        return msg
    },
    dados : ImageBitmap,
    nome : String,
    report : class Estado{
        private name :any
        private age  :Date
        private sex  :String
        private job  :String
        private code :boolean
    }
}
"======================================================"

