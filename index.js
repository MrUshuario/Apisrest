'use strict'
const express = require('express') /* esto es como un import "" */
const app = express()


app.listen(3000, () => {
	console.log('API REST corriendo en http://localhost:3001')
}) /* creamos un servidor */