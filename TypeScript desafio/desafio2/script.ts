

// Como podemos melhorar o esse código usando TS? 

/*let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}*/

enum trabalho{
    atriz,
    padeiro
}

type people = {
    nome: string,
    idade: number,
    profissao : trabalho
}

let pessoa1: people = {
nome: "Maria",
idade: 29,
profissao : trabalho.atriz 
}

let pessoa2: people = {
    nome :"roberto",
    idade : 19,
    profissao: trabalho.padeiro
}

let pessoa3: people = {
    nome : " laura",
    idade : 32,
    profissao : trabalho.atriz
}

let pessoa4: people = {
    nome : "carlos",
    idade : 19,
    profissao : trabalho.padeiro
}