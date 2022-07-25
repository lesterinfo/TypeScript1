//Tipo Explicito
let idUser;
idUser = 1;
idUser = '1';
console.log('idUser: ', idUser);
//Tipo Inferido
let otherId;
otherId = 1;
otherId = '1';
console.log('otherId: ', otherId);
let surprise = 'Hello Amigos';
const res = surprise.substring(6);
console.log('res: ', res);
//tipo void, como tipo de dato en variable
let unusable;
unusable = null;
unusable = undefined;
//Tipo: Never
function handleError(code, menssage) {
    //Process you code here
    //Generate a message
    throw new Error(`${menssage}. Code: ${code}`);
}
try {
    handleError(404, 'Not Found');
}
catch (error) {
}
