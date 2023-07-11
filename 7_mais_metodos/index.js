let pessoa = {
    nome: "Rodrigo",
    idade: 35,
    falar: function () {
        alert("Olá " + this.nome + "!");
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