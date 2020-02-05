// ----- Modules
const express = require('express')
const path = require('path')

// ----- Declarations
const app = new express()

// ----- Use functions
app.use(express.static('public'))

// ----- GET functions
app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'pages/index.html'))
})

// ----- Listener
app.listen(process.env.PORT || 5000)
//app.listen(5000, () => {
//	console.log('App listening on port 5000')
//})