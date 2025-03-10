function criarArvore(especie, temFruto){
    return{
        especie: especie,
        temFruto: temFruto
    }
}

let laranjeira = criarArvore("laranjeira", true);
console.log(laranjeira);
console.log(laranjeira.constructor);

function Heroi(nome, tipo){
    this.nome = nome;
    this.tipo = tipo;
}

let goku = new Heroi("Son Goku", "Sayjin");

console.log(goku);

console.log(goku.constructor);


console.log(laranjeira instanceof criarArvore);
console.log(laranjeira instanceof Object);
console.log(goku instanceof Heroi);

let arr = [];

console.log(arr instanceof Array);