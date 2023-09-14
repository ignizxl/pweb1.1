//algoritmo 05

//criando o array users com vários objetos e criando suas 'keys': 'firstName', 'lastName' e 'age' e atribuindo 
//os seus valores correspondentes 
const users = [
    {firstName:"john" ,lastName:"Biden", age:26},
    {firstName:"jimmy" ,lastName:"cob", age:75},
    {firstName:"sam" ,lastName:"lewis", age:50},
    {firstName:"Ronald" ,lastName:"Mathew", age:26}  
  ];

  //List of fullname
  //utilizo a função map para percorrer cada elemento dentro do objeto 'users'
  //o map recebe uma função como parâmetro que basicamento vai pegar o valor da key 'firstName'
  //e vai concatenar com o valor da key 'lastName'; e vai fazendo isso para cada pessoa dentro do objeto
  //users  
  const output = users.map((x) => {
      return x.firstName + " " + x.lastName;
  })
  //e por fim, vamos imprimir no console o resultado da concatenação do primeiro com o segundo nome de cada pessoa
  console.log(output);
  