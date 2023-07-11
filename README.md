### PROGRAMA ORIENTADO A OBJETOS UTILIZANDO JAVASCRIPT

1{
    *O que é Orientação a Objetos?*
    º [Um *paradigma* de programação baseado em objetos]
    º [Onde os *objetos* interagem entre si]
    º [E os *objetos* é uma instância de uma *classe*]
    º [Auxilia no reaproveitamento de código]
    º [Torna o código menos confuso em relação ao procedural]
    º [*Design Patterns*]
}

2{
    *OO x mundo real*
    º [Uma classe *Carro* representa todos os carros do mundo]
    º [Porém cada *Carro* distingue do outro, sendo assim eles são objetos]
    º [Tendo características (*propriedades*) e funcionalidades próprias (*métodos*)]
    º [O *Carro* pode ter 4 ou 2 portas (*propriedades*)]
    º [Podemos acelerar ou frear com o *Carro* (*métodos*)]
    º [É-boas-praticas-criar-Classes-sempre-com-a-primeira-letra-em-maiuscola]
}

3{
    *OO e JavaScript*
    º [*JavaScript* não é uma liguagem baseada em classes]
    º [Porém podemos utilizar a  *OPP* nela]
    º [Na versão *ES2015* foi inserida a funcionalidade de *Classe* no *JS*]
    º [*JS* possui *Prototypes*, isso faz com que todos os objetos tenham um pai]
    º [Além dos seus objetos *built-in* como: _Number_, _Bollean_, _Array_, _Object_, _Error_ e etc..]
}

4{
    *O que é um objeto ?*
    º [Um tipo de dado que possui duas características]
    º [*Propriedades:* características do objeto]
    º [*Métodos:* ações do objeto]
    º [O protagonista na programação orientada a objetos]
}

5{
    *Como criar um objeto*
    º [No *JavaScript* podemos criar um objeto abrindo e fechando chaves]
    º [O objeto parece um array de chave e valor]
    º [Poedmos atribuir o objeto a uma variável]
    º *Exemplo*[
        let carro = {
            portas: 4
        }
    ]
}

6{
    *Propriedades*
    º [As propriedades são as características dos objetos]
    º [Por ex: _cor_, _portas_, _nome_, _marca_ e ect..]
    º [Poedmos iniciar um objeto com várias propriedades]
    º [E acessá-las para resgatar os seus valores]
    º *Exemplo*[
        let carro = {
            portas: 4,
            cor: "Preto",
        }
        console.log(carro.portas);
        console.log(carro['cor']);
    ]
}

7{
    *Tipos de dados e propriedades*
    º [As propriedades aceitam qualquer tipo de dados do *javaScript*]
    º [_Booleanos_, _numbers_, _strings_, e _array_ ]
    º *Exemplo*[
        let carro = {
            portas: 4,
            cor: "Preto",
            opcionais: [
                "teto solar, "blindagem", "ar condicioando"
            ],
            revisado: true
        }
        console.log(carro.portas);
        console.log(carro['cor']);
        console.log(carro.revisado);
        console.log(carro.opcionais);
    ]
}

8{
    *Propriedades com mais de uma palavra*
    º [As propriedades podem ter mais de uma palavra]
    º [Nesta caso precisamos colocá-las entre aspas]
    º [Obs: não é muito utilizado, opte pro camelCase]
    º *Exemplo*[
        let carro = {
            portas: 4,
            cor: "Preto",
            "tem blindagem": true
        }
        console.log(carro.portas);
        console.log(carro['cor']);
        console.log(carro.["tem blindagem"]);
    ]
}

9{
    *Acessando Propriedade por variáveil*
    º [Podemos acessar uma propriedade por meio de uma variável]
    º [è importante que a variável contenha o texto da propriedade, veja]
    º *Exemplo*[
        const robor = {
            bracos: 4,
            pernas: 2,
            arma: "metralhadora",
            armaEspecial: "foguete",
        }
        let a = 'arma';
        console.log(robo[a]);
    ]
}

10{
    *Como Criar Métodos*
    º [Os métodos são as ações dos objetos]
    º [Podemos ter métodos de resgatar prorpiedades do objeto ou modificar o valor delas, por exemplo]
    º *Exemplo*[
        const robor = {
            bracos: 4,
            pernas: 2,
            arma: "metralhadora",
            armaEspecial: "foguete",
            atirar: function(){
                console.log('pew, pew, pew');
            }
        }
        robor.atirar();
    ]
    *Criando mais Métodos*
    º [Os métodos podem realizar qualquer operação que uma função realiza]
    º *Exemplo*[
        let pessoa = {
            nome: "Rodrigo",
            getNome: function(){
                console.log("O nome é "+ this.nome);
            },
            setNome: funtion(novoNome){
                this.nome = novoNome;
            }
        }
        pessoa.getNome();
        pessoa.setNome("Elizama");
        pessoa.getNome();
    ]
}