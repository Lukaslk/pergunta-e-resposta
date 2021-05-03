const Sequelize = require('sequelize')

const conn = new Sequelize('db_perguntas', 'root', 'senha', {
    hots: 'localhost',
    dialect: 'mysql'
})

module.exports = conn
