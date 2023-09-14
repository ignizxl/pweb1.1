//algoritmo 06

//criando um array de objetos chamado users
const users = [
    {firstName:"john",lastName:"Biden",age:26},
    {firstName:"jimmy",lastName:"cob",age:75},
    {firstName:"sam",lastName:"lewis",age:50},
    {firstName:"Ronald",lastName:"Mathew",age:26} 
  ];

  //using reduce array method
  
  //o reduce vai percorrer cada objeto dentro do array de objetos, procurando na key 'age'
  //e verificando se essa 'age' já foi adicionada dentro do acumulador 'acc'
  // acc -> acumulador 
  // curr -> indice(ou o 'objeto da vez')
  const output = users.reduce(function(acc,curr){
      //verifica se o valor da key 'age' já foi adicionado em 'acc', se foi, faço o auto incremento '++'
      if(acc[curr.age])
      //if present in array object
      {
          acc[curr.age] ++;            
      }else{
        //senão, atribuio o valor 1
      //if not present in array object
        acc[curr.age] = 1;      
      }
      return acc;
  },{})
  
  //mostrando no console quantas vezes as idade iguais e não iguais aparecem
  console.log(output);
   