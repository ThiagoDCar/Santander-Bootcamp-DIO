function getAdmins(map){
    let admins = [];
    for([key,value] of map){
        if(value === "Admin"){
        admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Thiago', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge' , 'user');

console.log(getAdmins(usuarios));