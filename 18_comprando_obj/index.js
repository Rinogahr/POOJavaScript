
function Robo(nome, arma){
    this.nome = nome;
    this.arma = arma;
}

let robo1 = new Robo('Optimus Primer', 'Espada de titanio');
let robo4 = new Robo('Optimus Primer', 'Espada de titanio');
let robo2 = new Robo('Bubobi', 'Metralhadora');

console.log( robo1 === robo2);

let robo3 = robo1;

console.log(robo1 === robo3);

console.log(robo4 === robo1);
