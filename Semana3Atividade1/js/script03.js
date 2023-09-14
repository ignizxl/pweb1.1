//algoritmo 03

//como já foi explicado nos algoritmos anteriores como funciona os arrays, não vou repetir 
//declarando o array 'arr' e atribuindo os valores 1, 2, 3, 4, 5
const arr = [1, 2, 3, 4, 5];
//criando uma função chamada 'isOdd' que recebe um parâmetro x
function isOdd(x){
    //essa função irá retornar um valor '0', que representa um número par, ou o valor 1,
    //que representa um número ímpar
   return x % 2; 
}

//filter() -> a função filter vai 'remover', vai filtrar elementos indesejados com base
//em algumas condições. 

//neste exemplo, o filter está percorrendo cada elemento do array 'arr' e executando a função 'isOdd' pra
//cada elemetno do array para fazer filtragem dos valores que forem PAR, (elemento % 2)
const output = arr.filter(isOdd);

//imprimindo no console
console.log(output);
