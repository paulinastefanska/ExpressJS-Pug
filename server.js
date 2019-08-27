var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('views'));

app.get('/', function (req, res) {
    res.render('home.pug');
});

app.get("/login", function(req, res) {
  res.render("login.pug", {
    login: req.query.login,
    password: req.query.password
  });
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});