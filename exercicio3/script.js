//Crie a const para a frase aqui
const gatoFrase=(` mas não deixe o gato sair"`)
gatoFrase.toUpperCase();
const gatoFraseToUpper=gatoFrase.toUpperCase();

const frase=(`Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS,${gatoFraseToUpper}"`);
console.log(frase);

const novaFraseVerde=frase.replaceAll("verde","rosa");
console.log(novaFraseVerde);

const novaFraseRosa=novaFraseVerde.replaceAll("azul","laranja");
console.log(novaFraseRosa);

