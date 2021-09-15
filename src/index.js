const express = require('express')
const router = require('./routes/subject.route')

const app = express()

app.use(express.json())

app.use('/subjects', router)

app.get('/', (req, res) => {
    res.send('Hello world!')
})

const port = 8087

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})