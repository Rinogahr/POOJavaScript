let pessoa = {
    nome: "Rodrigo",
    idade: 35,
    falar: function () {
        alert("Olá meu nome é" + this.nome);
    },
    aniversario() {
        this.idade += 1;
    },
    dizerIdade() {
        console.log("A minha idade é" + this.idade);
    },
    podeDirigir: function () {
        if (this.idade >= 18){
            console.log("Pode dirigir");
        }else{
            console.log("Não pode dirigir");
        }
    },
    caracteristicas:{
        cnh: true,
        carteira: ["dinheiro","documentos","cartão de credito","moedas"]
    },
    perguntar: function(vl){
        vl =  prompt("Oi! qual é o seu nome? exemplo", this.nome);
       if (!vl) {
            vl = prompt("Por que você não me fala o seu nome? exemplo", this.nome);
            if(vl){
                return; 
            }
        }else{
            this.nome = vl;
            this.falar();
        }
    }
}


pessoa.perguntar();