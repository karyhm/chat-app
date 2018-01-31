const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const {generateMessage} = require('./utils/message')
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

	// emit message to the user who comes from Admin welcome to the chat app
	socket.emit('welcomeMessage', generateMessage('Admin', 'Welcome to the chat app'))

	// socket.broadcast.emit from Admin text new user joined greeting us
	socket.broadcast.emit('welcomeMessage', generateMessage('Admin', 'New User has joined'))

	// created event
	socket.emit('newEmail', {
		from: 'Kary',
		text: 'Hi',
		createdAt: 'Jan 29th 2018'
	})
	
	socket.on('createMessage', (message) => {
		io.emit('newMessage', generateMessage(message.from, message.text))

		// // BROADCASTING: emitting an event to everybody except one
		// socket.broadcast.emit('newMessage', {
		// 	from: message.from,
		// 	text: message.text,
		// 	createdAt: new Date().getTime()
		// })

		console.log('createMessage', message)
	})

	socket.on('createEmail', (newEmail) => {
		console.log('createEmail', newEmail)
	})

	socket.on('disconnect', () => {
		console.log('Disconnected from server')
	})
})

server.listen(port, () => {
	console.log(`Server is up on port ${port}`)
})


