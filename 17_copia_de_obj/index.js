let obj = {
    numero: 1,
}

console.log(obj.numero);

let copia = obj;

console.log(copia.numero);


copia.numero = 10;

console.log(obj);
console.log(copia);

