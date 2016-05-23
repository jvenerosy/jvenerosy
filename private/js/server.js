var express = require('express');
var app = express();
var port = process.env.PORT || 9740;

app.use(express.static('public'));

//routes
app.get('/', function (req, res) {
    res.render('pages/homepage.html.twig');
});

app.get('/portfolio', function (req, res) {
    res.render('pages/portfolio.html.twig');
});

app.get('/cv', function (req, res) {
    res.render('pages/cv.html.twig');
});

app.listen(port);
