//algoritmo 02

//inicio declarando a variável 'arr' como uma variável constante e, já atríbuo os valores '1, 2, 3, 4, 5'.
//além do 'arr' ser uma variável constante, o seu tipo primitivo é um tipo especial chamado 'array' onde 
//os seus delimitadores especiais são os '[...]', no qual me permitem armazenar vários valores  
const arr = [1, 2, 3, 4, 5];

//declaro 'output' como uma variável constante, e output recebe o arr.map (O map vai 'varrer'
//cada elemento do 'arr' e a cada iteração a arrow function multiplica o elemento por 2 e 
//armazena o resultado em 'output') e já passo uma arrow 
//function que recebe um parâmetro x, a arrow function vai retornar o valor de 'x' vezes 2,
//como no algoritmo anterior, a diferença é que aqui nos estamos
//utilizando uma arrow function.
const output = arr.map((x) => {
    return x * 2;  
  });

//imprime o resultado no console 
//obs: é válido ressaltar que os valores de 'arr' não são alterados! ao invés disso, são gerados
//novos valores e esses valores são armazenados em 'output'
console.log(output);


