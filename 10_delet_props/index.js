let carro = {
    tipo: "SUV",
    ligar: function () {
        console.log("Ligou...");
    }
}

console.log(carro.tipo);
console.log(carro.ligar);

delete carro.tipo;
delete carro.ligar;

console.log(carro.tipo);
console.log(carro.ligar);


carro.ligar();