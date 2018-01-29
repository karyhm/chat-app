const path = require('path')
const express = require('express')

const publicPath = path.join(__dirname, '../public')
// for heroku
const port = process.env.PORT || 3000
const app = express()

// create a server app
app.use(express.static(publicPath))

app.listen(port, () => {
	console.log('Server is up on port 3000')
})


