//algoritmo 07

//criando um array chamado student e, dentro desse array tem vários objetos com suas 'keys' e seus 'values'
let student =[
    {name:"Smith", rollNumber:31, marks:80},
    {name:"Jenny", rollNumber:15, marks:69},
    {name:"John", rollNumber:16, marks:35},
    {name:"Tiger", rollNumber:7, marks:55}
   ];

//declarando a variável 'details' como uma constante que recebe um filter que vai varrer cada objeto
//com uma arrow function e a cada 'iteração', vai verificar se o elemento, na key 'marks' tem o valor 
//maior que 60 e se o elemento na key 'rollNumber' tem o o valor maior que 15, se por acaso atender a essas
//duas condições, o objeto será armazenado dentro de 'details '
const details = student.filter((x) => x.marks > 60 && x.rollNumber > 15);

//mostrando no console o único valor que atendeu as duas condições acima
console.log(details);
   