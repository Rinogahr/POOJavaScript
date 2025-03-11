let rodas =4;
let portas =4;
let aro =4;
let tetoSolar =4;
let cor ="Preto";

let t = "tipo_de_";

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
    },
    [t+"carro"]: "Sedan"
}

console.log(carro.tipo_de_carro);


let barco = {
    [t+"barco"]: "Lancha"
}

let aviao = {
    [t+"avia"]: "Boeing"
}