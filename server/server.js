const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public')
// for heroku
const port = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)
// web socket server
const io = socketIO(server)

// create a server app
app.use(express.static(publicPath))

// call a method on io to listen for an specific event
io.on('connection', (socket) => {
	console.log('New user connected')

	socket.on('disconnect', () => {
		console.log('Disconnected from server')
	})
})

server.listen(port, () => {
	console.log(`Server is up on port ${port}`)
})


