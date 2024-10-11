import express from 'express'
import mongoose from 'mongoose'

import postRoutes from './routes/post.js'

import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true })); 

app.use('/api/v1/blog', postRoutes)

app.all('*', (req, res) => {
    res.status(404).send('Page not found')
})

mongoose.connect('mongodb://localhost:27017/blogDB')
    .then(() => app.listen(port))
    .then(() => console.log(`Database succesfullyy connected an app listening on port ${port}`))
    .catch(err => console.log('Connection error', err))

