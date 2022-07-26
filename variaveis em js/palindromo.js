//solução 1
function verificaPalindromo(string){
    if(!string){
        "Não é uma String"
        return;
    } 
   return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo2("ana"));

//solução 2

function verificaPalindromo2(string){
    if(!string){
        return "não é uma String";
    } 
    for(let i = 0; string.length / 2 > i; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }
    return true;
}

