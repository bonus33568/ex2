
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/about', (req, res) => res.send('โบเอง'))
app.get('/contact', (req, res) => res.send('FB : Natthapong Muensri tel : 0992929062'))
app.get('/test', (req, res) => {
    res.json({message: "test"})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
