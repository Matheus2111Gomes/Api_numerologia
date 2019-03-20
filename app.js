const express = require('express');
const bodyParser = require('body-parser');
const ConverterNome = require('./name.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false})); 



app.get('/', (req, res) => {
	res.send("Ainda será feito um front-end... utilize localhost:8000/nome/\"seunomeaquisesmespacos\" para retornar um json");
});


app.get('/nome/:nome', (req, res) => {
    const nome = req.params.nome;
    res.send(ConverterNome.RetornarJson(nome));
});

app.listen(8000, function() {
	console.log('rodando...');
});