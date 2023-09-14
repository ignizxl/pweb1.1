//algoritmo 01

//inicio declarando a variável 'arr' como uma variável constante e, já atríbuo os valores '1, 2, 3, 4, 5'.
//além do 'arr' ser uma variável constante, o seu tipo primitivo é um tipo especial chamado 'array' onde 
//os seus delimitadores especiais são os '[...]', no qual me permitem armazenar vários valores  
const arr = [1, 2, 3, 4, 5];

//criando uma função chamada 'double' que recebe um parâmetro 'x'
function double(x){
    //essa função irá me retornar o valor que foi passado como parâmetro 'x' multiplicado por 2 
    return x * 2;  
}

//declarando a variável 'output' como uma variável constante. 
//a função 'map' funciona como um laço for, ela vai percorrer cada elemento do array 'arr'
//e a cada elemento do 'arr' ela vai chamar a função double para multiplicar o elemento por 2 
//em resumo, o map vai executar a função double em cada elemento do array 'arr' e vai
//armazenado o resultado na variável 'output'
const output = arr.map(double);
//por fim, imprime o 'arr' no console
console.log(arr);
//está linha foi adicionada para melhorar a explicação
console.log(output);


