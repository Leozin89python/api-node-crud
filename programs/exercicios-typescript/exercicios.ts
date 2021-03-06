console.log('=================================================================================')
console.log('                       HOLLYWOOD in typescript ')
console.log('=================================================================================')

function direction() :String  {
    const director :String = 'James woods'
            
    return  director
}

console.log( direction())

console.log('=================================================================================')

const actress :any = [{
    name: 'Jessica Chanstain',
    movie:'x-men dark phoenix'
},{
    name: 'Carrie Ane Moss',
    movie:'matrix'
},{
    name: 'Bryce dallas Howard',
    movie:'Jurassic World'
},{
    name: 'Monica Belucci',
    movie:'matrix reloaded'
},{
    name:'Jennifer Connely',
    movie:'a brightness mind'
},{
    name:'Kate Winslet',
    movie:'titanic'
}]

console.log(actress)

console.log('=================================================================================')

const numbers :any = [1,2,54,78,9]
console.log(numbers[3])

console.log('=================================================================================')

const studios :any =[{
    studio:'warner',
    country: 'USA'
},{
    studio:'universal',
    country: 'USA'
},{
    studio:'disney',
    country: 'USA'
},{
    studio: 'fox',
    country: 'USA'    
},{
    studio:'touchstone',
    country: 'USA'
}]

const mapStudios = () => studios.map(studio =>  studio.studio)
console.log(mapStudios())

console.log('=================================================================================')

const movieHero  = {
    movie:'spider-man 2',
    year :2004,
    director:'Sam Raimi',
    starring:'Tobey maguire',
    co_starring:'Kirsten Dunrst'
}

const {  movie, year, starring  } = movieHero
console.log('movie:' + movie + ',' + 'year:' + year +  ',' + 'starring:' + starring + '.')

console.log('=================================================================================')

class Production {
    private name :String = 'Cristopher Nolan'
    private job  :String = 'batman the dark knight'
}

const prod = new Production()
console.log(prod)

console.log('=================================================================================')

function calculationProductionLowValueMovie (valueProductionMovie, taxProduction, peopleMovieProduction) :void {
    const totalValueMovieProduction :any = (valueProductionMovie * peopleMovieProduction *  (taxProduction/100))
    
    console.log(totalValueMovieProduction)
}

calculationProductionLowValueMovie(1000,3,100)

console.log('=================================================================================')



console.log('=================================================================================')