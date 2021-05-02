const express = require('express')
const router = express.Router()
const Pergunta = require('../models/Perguntas')
const Resposta = require('../models/Resposta')

//Página principal
router.get("/", (req, res) => {
    Pergunta.findAll({ raw:true, order:[
        ['id','DESC']
    ] }).then((perguntas) => {
        res.render("index", {
            perguntas: perguntas
        });
    })
});

//Pagina perguntas
router.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

//Salvando a pergunta
router.post('/salvarpergunta', (req, res) => {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(()=> {
        res.redirect("/")
    })
})

//Recupar pergunta por id
router.get('/pergunta/:id', (req, res) => {
    let id = req.params.id
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined) {

            Resposta.findAll({
                where: {perguntaId: pergunta.id},
                order: [
                    ['id','DESC']
                ]
            }).then(respostas => {
                res.render('buscaPerguntaId', {
                    pergunta: pergunta,
                    respostas: respostas
                })
            })
        } else {
            res.redirect('/')
        }
    })
})

//Respondendo a pergunta
router.post('/responder', (req, res)=> {
    let corpo = req.body.corpo
    let perguntaId = req.body.pergunta
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(()=> {
        res.redirect('/pergunta/' + perguntaId)
    })
})

module.exports = router