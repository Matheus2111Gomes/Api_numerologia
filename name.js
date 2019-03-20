//Array utilizado como tabela para associas as letras aos números.
var letra = [
	'a,j,s', //numero 1 ...
	'b,k,t', //2
	'c,l,u', //3
	'd,m,v', //4
	'e,n,w', //5
	'f,o,x', //6
	'g,p,y', //7
	'h,q,z', //8
	'i,r'    //numero 9
]
///Função que me retorna um vetor possuindo as letras do nome. 
function SepararLetrasNome(nom) {
	var nomAux;
	var vetorDeLetras = new Array();

	for (var i = 0; i <= nom.length; i++) {
		nomAux = nom.substring(i,i+1);
		if(nomAux != ' ' && nomAux != ''){
		vetorDeLetras.push(nomAux);
		}
	}
	return vetorDeLetras;
}
//Função que converterá as letras do nome em seu respectivo número.
function ConverterLetraNumero(l){
	var numero;
	for (var i = 0; i <= letra.length; i++) {
		//Caso o retorno do método match seja diferente de null, podemos afirmar que a letra pertence a esse grupo de 
		//numeros, é acrescentado mais um devido o inicio do vetor ser em 0. 
		if(letra[i].match(l.toLowerCase()) != null){
			numero = i+1;
			break;
		}
	}
	return numero;
}
//Função que fará soma das vogais.
function SomaInterior(nom){
	var vogais = 'aeiou'
	var interior = 0;
	var retornoSoma = 0;
	
	//laço que fara o somatorio das vogais segundo a tabela.
	for(var i = 0; i < nom.length; i++){
		if(vogais.match(nom[i].toLowerCase()) != null)
		interior += ConverterLetraNumero(nom[i]);	
	}
	return ReducaoDeNumeros(interior);
}
//Função que fará a soma das consoantes.
function SomaExterior(nom){
	var vogais = 'aeiou'
	var exterior = 0;
	retornoSoma = 0;
	//laço que fara o somatorio das consoantes segundo a tabela.	
	for(var i = 0; i < nom.length; i++){
		if(vogais.match(nom[i].toLowerCase()) == null)
		exterior += ConverterLetraNumero(nom[i]);		
	}

	return ReducaoDeNumeros(exterior);
}
//Função para efetuar a redução dos algarismos do numero, exceto se forem os numeros 11 ou 22.
function ReducaoDeNumeros(num){
	var retornoSoma = 0;
	if(num == 11 || num == 22 || num.toString().length == 1){
		return num;
	}
	else{
		for( var i = 0; i< num.toString().length; i++){
			retornoSoma += parseInt(num.toString()[i]);
		}
		//Para caso a soma continue com mais de um algarismo e não seja os numeros citados, usamos da recursividade 
		//para reduzi-la até o valor dessejado.
		return ReducaoDeNumeros(retornoSoma);
	}
}
function SomaSintese(nom){

	return ReducaoDeNumeros(SomaInterior(nom)+ SomaExterior(nom));
}
function RetornarJson(nome){
	var retorno = "{\"Nome\":\""+nome+"\", \"Quantidade De Letras\":"+SepararLetrasNome(nome).length+", \"Número Interior\":"+SomaInterior(nome)+", \"Número Exterior\":"+SomaExterior(nome)+", \"Número Síntese\":"+SomaSintese(nome)+"}";
	return retorno;	
}
 

module.exports = {RetornarJson}
