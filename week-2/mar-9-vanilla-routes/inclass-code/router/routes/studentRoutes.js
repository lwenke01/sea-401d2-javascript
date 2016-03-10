'use strict';

var http = require('http')
var Router = require('../lib/router')
var studentsRouter = new Router()

studentsRouter.get('/students', (req, res) => {
	console.log('/students route hit')
	// Would actually do a students database lookup
	res.end()
})

http.createServer(studentsRouter.route()).listen(3000)
