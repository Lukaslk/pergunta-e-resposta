const Sequelize = require('sequelize')

const conn = new Sequelize('db_perguntas', 'root', 'Chave$$12', {
    hots: 'localhost',
    dialect: 'mysql'
})

module.exports = conn