const express = require('express')
const server = express()
const port = 3001
const heroController = require('./controller/hero.controller')
const itemController = require('./controller/item.controller')

const bodyParser = require('body-parser')

server.use(bodyParser.urlencoded({ extended: false }))
server.set("view engine", "ejs")
server.set("views", "view")

server.use(express.static(__dirname + '/public'));
server.use('/hero', heroController)
server.use('/item', itemController)


server.use('/', (req, res) => {
    res.render('index', {pageData : "home"})
})


server.listen(port, () => {
    console.log(`listening to port ${port}`)
})
