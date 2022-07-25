console.log('Hola Lesterinfo!!!');
//number
//Explicito
let phone;
phone = 1;
phone = 542345678;
//phone = 'Hola'; //ERROR
//Inferido
let phoneNumber = 542345678;
//phoneNumber = true; //ERROR por tipo
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// Tipo: Boolean
//Tipado Explicito
let isPro;
isPro = true;
//isPro = 45645; Error
//Inferido
let isUserPro = false;
//String
let username = 'Lesterinfo';
username: 'Lester';
//Template String
//USo de back-tick
let userInfo;
userInfo = `
    User Info: 
    username: ${username}
    firstName: ${username + ' Bravo'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);
console.log('----------FIN--------------');
console.log('----------FIN--------------2');
