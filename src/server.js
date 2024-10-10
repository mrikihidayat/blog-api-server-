import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

mongoose.connect('mongodb://localhost:27017/blogDB')
    .then(() => app.listen(port))
    .then(() => console.log(`Database succesfullyy connected an app listening on port ${port}`))
    .catch(err => console.log('Connection error', err))