const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//----------------FRONT ROUTE-----------------//
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/contact', (req, res) => {
    res.render('pages/contact')
})

app.get('/about', (req, res) => {
    res.render('pages/about')
})


//----------------ADMIN ROUTE-----------------//
app.get('/admin', (req, res) => {
    res.render('pages/admin/index')
})

app.get('/admin/article', (req, res) => {
    res.render('pages/admin/articles')
})

app.get('/admin/add_article', (req, res) => {
    res.render('pages/admin/addArticles')
})

app.post('/admin/add_article', (req, res) => {
    console.log('ssssssssssssssssssssssssssssss', req.body)
})


//----------------SERVER ROUTE-----------------//
app.listen(8001, () => {
    console.log('Server is running on localhost 8001')
})

