function Ninja(nome, arma){
    this.nome =  nome;
    this.arma =  arma;
    this.atirarArma = function(){
        console.log(`O ninja ${this.nome} atirou uma ${this.arma}`);
    };
}

let kakaje = new  Ninja();
kakaje.nome = 'Kakaje Sencei';
kakaje.arma = 'Kunai';

kakaje.atirarArma();

let narutoUsumaky = new Ninja();
narutoUsumaky.nome = 'Naruto Usumaky';
narutoUsumaky.arma = 'Razengam';
narutoUsumaky.atirarArma();

let sasuke = new Ninja('Sasuke', 'thidore');
sasuke.atirarArma();
 