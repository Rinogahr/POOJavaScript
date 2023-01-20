let pessoas = {       // OBJETO CRIADO EM FORMATO DE ARRAY
    nome: '',        //
    idade: 0,       // PROPS, (PARAMETROS DO MEU OBJETOS)
    sexo: '',      //
    dataNasc: '', //
    novaPessoa: function(newNome,newIdade,newSexo,newDataNasc){ // PROPS, (PARAMETROS DO MEU OBJETOS EM FORMATO DE FUNÇÃO COM SEUS PARAMTRO EXCLUSIVOS)
        this.nome = newNome; //RECEBENDO OS VALORES E PASSANDO PARA OS PARAMETROS GLOBAIS
        this.idade = newIdade; //RECEBENDO OS VALORES E PASSANDO PARA OS PARAMETROS GLOBAIS
        this.sexo = newSexo; //RECEBENDO OS VALORES E PASSANDO PARA OS PARAMETROS GLOBAIS
        this.dataNasc = newDataNasc; //RECEBENDO OS VALORES E PASSANDO PARA OS PARAMETROS GLOBAIS
    },
    readPessoas : function (){ // PROPS, (PARAMETROS DO MEU OBJETOS EM FORMATO DE FUNÇÃO)
        return this.nome + ' - ' + this.idade + ' - ' + this.sexo + ' - ' + this.dataNasc // RETORNA OS VALORES PASSADOS NAS PROPS
    }

}

pessoas.nome = 'Rodrigo Pedro maciel'; // PASSANDO UM VALOR PARA O PARAMETRO NOME NO MEU OBJETO PESSOAS
pessoas.idade = 34; // PASSANDO UM VALOR PARA O PARAMETRO IDADE NO MEU OBJETO PESSOAS
pessoas.sexo = 'Maculino'; // PASSANDO UM VALOR PARA O PARAMETRO SEXO NO MEU OBJETO PESSOAS
pessoas.dataNasc = '08/11/1988'; // PASSANDO UM VALOR PARA O PARAMETRO DATANASC NO MEU OBJETO PESSOAS

let n = 'nome'; // PASSANDO O ARAMETRO NOME A UMA VARIAVEL


pessoas.novaPessoa('Elisama Tavares',32,'Feminio','08/09/1990'); //USANDO O PARAMETRO QUE É UMA FUNÇÃO E ADICIONANDO UM NOVO REGISTRO


pessoas.falar = function(){ //ADICIONEI OUTRO METODO DENTRO DO MEU OBJETO PESSOAS
    let txt =  'Olá me chamo ' + `${pessoas.nome = 'Rodrigo Pedro maciel'}`; //CONCATENANDO O NOME INFORMADO JUNTO COM O TEXTO

    alert(txt); //USANDO O ALERT PARAR RENDERISAR O RESULTADO PASSADO DENTRO DO LET
}

console.log(pessoas[n]); //ACESSANDO A VAREAVEL QUE POSSUE O PARAMETRO QUE ADICIONEI AO MESMO

document.body.innerHTML += pessoas.readPessoas(); //ESCREVENDO OS DADOS ADICIONADOS PELO PARAMETRO QUE É UMA FUNÇÃO CHAMADA NOVAPESSOA

//pessoas.falar(); //CHAMEI O NOVO METODO CRIADO


// CRIANDO OBJETO UTILIZANDO O CONSTRUCTOR FUNCTION

function carros(nome){
    this.nome = nome;
}

let carro1 = new carros('Jeep');
let carro2 = new carros('Onix');

document.body.innerHTML += '<br>' + carro1.nome + ' <br> ' + carro2.nome;

// FUNÇÃO QUE RETORNA UM OBJETO

function lugar(endereco){
    return{
        endereco: endereco
    };
}

let endereco1 = lugar('Rua ibicaré');
let endereco2 = lugar('Rua Roberto Eugenio Mocas');

document.body.innerHTML += '<br>' + endereco1.endereco + '<br>' + endereco2.endereco;



function Robo(nome, arma){
    this.nome = nome;
    this.arma = arma;
}

function Humano2(nome){
    return{
        nome: nome
    }
}

// let h =  Humano('Jack');

// function Humano(nome){
//     this.nome = nome;
// }
// let h2 =  Humano2('Sparrow');

function Humano3(nome){
    this.nome = nome;
}
// console.log(h.constructor);

// console.log(h2.constructor);

let android = new Robo('Xyw', 'Punhos');

console.log(android instanceof Robo);
console.log(android instanceof Humano3);
