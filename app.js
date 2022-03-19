const express = require('express');
const path = require('path');
const dataFromFunctionJS = require('./function');
const outsideSubtitle = "podtytuł";
const app = express();
const port = process.env.PORT || 3000;
const imie = "wiola"


app.set('view engine', 'hbs')
app.use('/assets', express.static(path.join(__dirname, './assets')));
app.use('/js', express.static(path.join(__dirname, './js')));
app.get('/', function (req, res) {
    res.render('index', {
        pageTitle: "Zajęcia AFM 19.03.2022",
        subtitle: outsideSubtitle,
        example: dataFromFunctionJS.sayHello2()
    })
})
// get pobiera się dane, post put; end pointy wstawiamy w metodach get
app.get('/about', function (req, res) {
    res.render('about')
})
app.get(`/team/${imie}`, function (req, res) {
    res.send(`<h2>Strona o ${imie}</h2>`);
})


app.listen(port, (err) => {
    if (err) { return console.log(`wystąpił błąd ${err.message}`); }
    return console.log(`Apka działa na porcie ${port}`);
})