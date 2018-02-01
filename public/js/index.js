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
socket.on('newMessage', function (message) {
	var li = jQuery('<li></li>')
	li.text(`${message.from}: ${message.text}`)
	
	jQuery('#messages').append(li)
})

socket.once('newLocationMessage', function (message) {
	var li = jQuery('<li></li>')
	var a = jQuery('<a target="_blank">My current location</a>')

	li.text(`${message.from}: `)
	a.attr('href', message.url)
	li.append(a)
	jQuery('#messages').append(li)

})

socket.emit('createMessage', {
	from: 'Frank',
	text: 'Hi'
}, function (data) {
	console.log('Got it', data)
})

jQuery('#message-form').on('submit', function (e) {
	e.preventDefault()
	var messageTextbox = jQuery('[name=message]')

	socket.emit('createMessage', {
		from: 'User',
		text: messageTextbox.val()
	}, function () {
		messageTextbox.val('')
	})
})

var locationButton = jQuery('#send-location')
locationButton.on('click', function () {
	if (!navigator.geolocation) {
		return alert('Geolocation not supported by browser')
	}
	locationButton.attr('disabled', 'disabled').text('Sending Location...')
	navigator.geolocation.getCurrentPosition(function (position) {
		locationButton.removeAttr('disabled').text('Send Location')
		socket.emit('createLocationMessage', {
			latitude: position.coords.latitude,
			longuitude: position.coords.longitude
		})
	}, function () {
		locationButton.removeAttr('disabled').text('Send Location')
		alert('Unable to fetch location')
	})
})
