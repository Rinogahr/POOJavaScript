function criarCarro(modelo, portas, aro, tetoSolar){
    return {
        modelo: modelo,
        portas: portas,
        aro: aro,
        tetoSolar: tetoSolar,
        ligarCarro: function(){
            console.log('Ligou o carro');
        },
        temTetoSSolar: function(){
            if(this.tetoSolar == true){
                console.log('Tem teto solar');
            }else{
                console.log('Não tem teo solar');
            }
        }
    };
}

let hb20 = criarCarro('HB20', 4, 32, true);
console.log(hb20);
hb20.ligarCarro();
hb20.temTetoSSolar();

let palio = criarCarro('Palio Clio', 2, 24, false);
console.log(palio);
palio.ligarCarro();
palio.temTetoSSolar();