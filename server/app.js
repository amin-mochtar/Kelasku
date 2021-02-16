require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require ('cors')
const fileUpload = require('express-fileupload')
const history = require('connect-history-api-fallback');
const path = require('path')
const routes = require('./routes/index')
const errorHandle = require('./middlewares/errorHandle')
const app = express()

const port = 3000

app.use(morgan('tiny'))
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(fileUpload({useTemFiles : true}))
app.use(history())
app.use(express.static(path.join(__dirname, 'public')))
app.use(routes)
app.use(errorHandle);

app.listen(port, () => {
    console.log('running on port ',port)
})