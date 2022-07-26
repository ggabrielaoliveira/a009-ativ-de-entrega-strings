const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const stringSemEspaços= minhaString.trim();
console.log(stringSemEspaços);
//parte A) removida.

console.log(`Antes da remoção de espaços a string "${minhaString}" possuia ${minhaString.length} letras.
\nDepois da remoção de espaços, a string "${stringSemEspaços}" possui ${stringSemEspaços.length} letras`);
// parte B) feita

const substituição=stringSemEspaços.replaceAll("________","sticioso");
const stringSub=(`Antes da remoção de espaços a string "${minhaString}" possuia ${minhaString.length} letras.
\nDepois da remoção de espaços e substituição, a string "${substituição}" possui ${stringSemEspaços.length} letras`);

console.log(stringSub);
// parte c) feita
