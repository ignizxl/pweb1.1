//algoritmo 04

//declarando o array 'arr' e atribuindo os valores 1 2 3 4 5 
const arr = [1, 2, 3, 4, 5];
//declarando a variável output como uma constante
//o mesmo processo do algoritmo anterior se repete,
//utilzo a função filter para pegar o valor que for maior que 4, ou seja, o filter 
//vai varrer cada elemento de 'arr' e quando ele encontrar um valor maior que 4, ele vai 
//armazena-ló dentro de output

const output = arr.filter((x) => { //o filter já está recebendo uma arrow function como argumento
    return x > 4;
});

//mostrando no console
console.log(output);
