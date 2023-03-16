const express = require('express')
const services = require('./controllers/services')
const about = require('./controllers/about')

const app = express()

app.use('/services', services);
app.use('/about', about);

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(3002, () => {
    console.log('Server is running on port 3002')
})