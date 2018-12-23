const express = require('express')
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');


const port = process.env.PORT || 3000;



app.use(express.static(__dirname + '/public'));

// Express HBS  engine
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/parciales');

// Helpers
hbs.registerHelper('getAnho', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();

    });

    return palabras.join(' ');
})



app.get('/', (req, res) => {
    // let salida = {
    //         nombre: 'Rodolfo',
    //         edad: 32,
    //         url: req.url
    //     }
    //     //res.send('Hola mundo')
    // res.send(salida);
    res.render('home', {
        nombre: 'Rodolfo eDuardo garCia',
        anho: new Date().getFullYear()
    })
});

app.get('/data', (req, res) => {
    // let salida = {
    //         nombre: 'Rodolfo',
    //         edad: 32,
    //         url: req.url
    //     }
    res.send('Hola data')
        // res.send(salida);
});

app.get('/about', (req, res) => {
    // let salida = {
    //         nombre: 'Rodolfo',
    //         edad: 32,
    //         url: req.url
    //     }
    //res.send('Hola data')
    res.render('about', {
            anho: new Date().getFullYear()
        })
        // res.send(salida);
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});