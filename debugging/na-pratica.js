function validaArray(array,num){
 try{
    if(!array || !num){
        throw new ReferenceError("Envie os parâmetros");
    }
    if(typeof array !== 'object'){
        throw new TypeError("Array não é do tipo objeto");
    }
    if(typeof num !== 'number'){
        throw new TypeError("Array não é do tipo number");
    }
    if(array.length !== num){
        throw new RangeError("Tamanho inválido");
 } 
     return array;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log('Este erro é um ReferenceError!');
        }

    }
    
}
console.log(validaArray());