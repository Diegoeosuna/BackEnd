// Common JS
// const myModule = require('./sample-modules')

// import myModule from './sample-modules.js'

// const result = myModule.sum(1,2)

// console.log(result)


// Importamos el módulo con EcmaScript modules
import express from 'express';

// Inicializamos el módulo y lo guardamos en una variable (app)
const app = express()

app.use(express.json());

app.get('/', function(request,response){
    response.send('Hola Mundo')
})

//Endpoint Default
app.get('/', function(request, response) {
    console.log(request.query)
    response.send('Hola Mund0')
})

//Endpoint de users get (ejemplo)
app.get('/users', function (request, response){
    const users = ['Camila', 'Rigoberto', 'Cookie']
    response.send(users)
})

//Endpoint de users get con params (ejemplo)
app.get('/users/:user_id', function (request, response){
    console.log(request.params.user_id)
    response.send('Usuario Encontrado')
})

//Endpoint de users post (ejemplo)
app.post('/users', function (request, response) {
    if(!request.body.name) {
        response.send('Por favor, envía el usuario a crear')
    }

    const userName = request.body.name
    console.log(userName)

    response.send('Usuario creado')
})

//Endpoint de cars post
app.post('/cars', function (request, response) {
    console.log(request.body.brand)
    response.send('Carro creado')
})

// Utilizamos la función listen del módulo para correr el servidor
//Esta función siempre debe estar al final
app.listen(3000, () => {
    console.log('server running')
})