let rodas =4;
let portas =4;
let aro =4;
let tetoSolar =4;
let cor ="Preto";


let carro = {
    rodas,
    portas,
    aro,
    tetoSolar,
    cor,
    bancoDeCouro: true,
    ligar(){
        console.log("Vruuuuuuuuuuu!")
    },
    desligar: function(){
        console.log("Parei")
    }
}

carro.ligar();

console.log(carro);


let megazord = {
    nome: "",
    arma: "",
    explodirTudo(){
        console.clearlog("BOOM!")
    }
}

megazord.explodirTudo();


let tipo = "tipo_de_";

let carro2 = {
    [tipo+"Carro"]: "SUV"
}

let barco = {
    [tipo="barco"]: "Iate"
}

console.log(carro2.tipo_de_carro);