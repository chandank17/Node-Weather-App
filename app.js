const path = require('path');

const express = require('express');

const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 8080;


const hbsPartialPath = path.join(__dirname, './partials');
hbs.registerPartials(hbsPartialPath);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './templates'));


app.get('/', function (req, res) {
    res.render('index');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('*', function (req, res) {
    res.send('<h2>No page found</h2>');
});

app.listen(port, function () {
    console.log('listening at port ' + port);
});