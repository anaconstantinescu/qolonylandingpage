// ----- Modules
const express = require('express')

// ----- Declarations
const app = new express()

// ----- Listener
app.listen(4000, () => {
	console.log('App listening on port 4000')
})