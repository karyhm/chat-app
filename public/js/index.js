// method io()
// request client to server. open a connection
var socket = io()
socket.on('connect', function () {
	console.log('conected to server')

})

socket.on('disconnect', function () {
	console.log('Disconnected from server')
})

//custom event
socket.on('newMessage', function (from, text, createdAt) {
	console.log('new msg')
})


socket.on('welcomeMessage', function (message) {
	console.log(message)
})