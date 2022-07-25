//Tipo Explicito
let idUser: any;
idUser = 1;
idUser = '1';
console.log('idUser: ',idUser);

//Tipo Inferido
let otherId;
otherId = 1;
otherId = '1';
console.log('otherId: ',otherId);

let surprise: any = 'Hello Amigos';
const res = surprise.substring(6);
console.log('res: ',res);

//tipo void, como tipo de dato en variable
let unusable: void;
unusable = null;
unusable = undefined;

//Tipo: Never
function handleError(code: number, menssage: string): never{
    //Process you code here

    //Generate a message
    throw new Error(`${menssage}. Code: ${code}`);
}

try{
    handleError(404, 'Not Found');
}catch (error){

}
