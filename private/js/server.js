var express = require('express');
var app = express();
var port = process.env.PORT || 9740;

app.use('/static', express.static('public'));

//routes
app.get('/', function (req, res) {
    res.render('pages/fr/homepage.html.twig');
});

app.get('/portfolio/', function (req, res) {
    res.render('pages/fr/portfolio.html.twig');
});

app.get('/cv/', function (req, res) {
    res.render('pages/fr/cv.html.twig');
});

app.get('/en', function (req, res) {
    res.render('pages/en/homepage.html.twig');
});

app.get('/en/portfolio/', function (req, res) {
    res.render('pages/en/portfolio.html.twig');
});

app.get('/en/cv/', function (req, res) {
  res.render('pages/en/cv.html.twig');
});

app.listen(port);
