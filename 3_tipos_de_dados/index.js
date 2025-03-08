let maquina = {
    material:  "Aço inox",
    equipamentos: ['Motor', 'Freio', "Esteira", "Cilindro"],
    vaiMonstada: false,
    numeroDeMotores: 1,
}

console.log(maquina);
console.log(maquina.material);
console.log(maquina['equipamentos'][3]);
console.log(maquina.numeroDeMotores);
console.log(maquina['vaiMonstada']);

let robo = {
    braco: 4,
    pernas: 2,
    arma: 'metralhadora',
    armaEspecial: 'foguete',
    atirar: function(){
        console.log('pew, pew, pew');
    }
}

robo.atirar();