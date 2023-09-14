//algoritmo 08 

//declarando o array users com vários objetos, e atribuindo valores as suas keys: 'firstName' , 'lastName' e 'age' 
const users = [
    {firstName:"john",lastName:"Biden",age:26},
    {firstName:"jimmy",lastName:"Cob",age:75},
    {firstName:"Sam",lastName:"Lewis",age:50},
    {firstName:"Ronald",lastName:"Mathew",age:26},  
  ];
  //Chaining
  //declarando a variável output como uma constante que recebe um filter e um map
  //o filter vai 'varrer' cada objeto dentro de users procurando na key 'age' aqueles que tiverem o valor menor que 30
  //e feito isso, o map vai 'varrer' o objeto pegando apenas o valor da key 'firstName'
  const output = users.filter((x)=> x.age < 30).map((x)=> x.firstName);
  //em resumo, o filter vai pegar as pessoas que tem a idade menor que 30 e o map vai pegar o primeiro nome
  //dessas pessoas.
  
  console.log(output);
  