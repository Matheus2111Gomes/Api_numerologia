//Teste pode ser executado utilizando um terminal com o comando node index.test.js 
const test = require('tape');
const ConverterNome = require('./name.js');

test('RetornarJson', (t1) => {
	t1.assert(ConverterNome.RetornarJson('abc') === "{\"Nome\":\"abc\", \"Quantidade De Letras\":3, \"Número Interior\":1, \"Número Exterior\":5, \"Número Síntese\":6}", "correto");
	t1.end();
})