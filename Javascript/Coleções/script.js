function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios =  new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Gustavo', 'Admin');
usuarios.set('Natalia', 'Admin');
usuarios.set('Otavio', 'User');

console.log(getAdmins(usuarios)); 

