function Pessoa(_nome){
    this.Nome = _nome;
}

pessoa = new Pessoa("Rodrigo");

console.log(pessoa);


var carro ={
    marca: "ford",
    model: "Ka",
    getDetalhes: function(){
        return this.marca + ' - '+ this.model;
    }
}

carro.model = "Novo Ka"

console.log(carro.getDetalhes());

function Carros()
{
    var Marca = "";
    var Modelo = "";
    this.SetMarca = SetMarca;
    this.SetModelo = SetModelo;
    this.ShowMarca = DisplayMarca;
    this.ShowModelo = DisplayModelo;

    function DisplayMarca(){
        console.log(Marca);
    }

    function DisplayModelo(){
        console.log(Modelo);
    }

    function SetMarca(_marca){
        Marca = _marca;
    }

    function SetModelo(_modelo){
        Modelo = _modelo;
    }

}

let carros = new Carros();
carros.SetMarca("Kwide");
carros.SetModelo("Ford");
carros.ShowMarca();
carros.ShowModelo();

carro2 = {
    Marca : "Ford",
    Modelo: "Ka",
    Caracteristicas: ["Preto", 1.0, "2 portas"],

    exibirDetalhes : function(){
        console.log("Marca: " + this.Marca + " - Modelo: " + this.Modelo);
    }
}

carro2.exibirDetalhes();
console.log(carro2.Caracteristicas[0]);