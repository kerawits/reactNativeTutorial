var express = require('express')
var controller = require('./controller')
var bodyParser = require('body-parser')

var app = express()
var router = express.Router()

app.use(bodyParser.json())

router.route('/')
.get(controller.getTestFunction)
.post(controller.postTestFunction)

app.use(router)

var port = 3000
var host = '127.0.0.1'


app.listen(port, host, () => {
  console.log('listening on', host, port)
})
