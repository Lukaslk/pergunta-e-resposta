const express = require('express')
const indexRoutes = require('./routes/indexRoutes')
const app = express();
const conn = require("./database/database")
const router = express.Router()

//Database
conn
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados")
    })
    .catch((err) => {
        console.log("Erro " + err)
    })

//Sinalizando para o Express que ele deve usar o EJS como view engine
app.set('view engine', 'ejs')
app.use(express.static('assets'))

app.use(express.urlencoded({ extended: false}));
app.use(express.json())


//Rotas
app.use('/', indexRoutes)
app.use('/perguntar', indexRoutes)
app.use('/salvarpergunta', indexRoutes)
app.use('/buscaPerguntaId', indexRoutes)
app.use('/responder', indexRoutes)

app.listen(5000, ()=>{ console.log("App rodando!!");});