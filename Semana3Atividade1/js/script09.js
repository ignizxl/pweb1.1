//algoritmo 09

//criando um array com vários objetos
let student = [
    {name:"Smith",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"John",rollNumber:16,marks:35},
    {name:"Tiger",rollNumber:7,marks:55}
];
//declarando 'totalMarks' como uma constante que recebe uma função map que irá percorrer
//cada objeto dentro do array de objetos, e vai verifica se o elemento(o 'objeto da vez') na 
//key marks possui o valor menor que 60
const totalMarks = student.map((stu)=>{
    if(stu.marks<60){
        //se o valor da key marks for menor que 60, marks recebe marks + 20
        stu.marks+=20;
    }
    //e por fim, retorna o elemento
    return stu;
    //depois o filter vai pegar os elementos que possuirem o valor na key 'marks' maior que 60 e vai 
    //utitilizar o reduce para fazer o somatório dos valores das keys 'marks' de todos os objetos,
    //o valor do acumulador 'acc' inicia valendo 0 e vai sendo incrementado a cada iteração 
}).filter((stu) => stu.marks > 60).reduce((acc ,curr) => acc + curr.marks, 0);

console.log(totalMarks);
   