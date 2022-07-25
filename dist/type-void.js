//Void
//Tipo Explicito
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.firstName);
}
showInfo({ id: 1, username: 'Lesterinfo', firstName: 'Lester' });
//Tipo Inferido
function showFormattedInfo(user) {
    console.log('User Info', `
        id: ${user.id}
        userName: ${user.username}
        firstName: ${user.firstName}
    `);
}
showFormattedInfo({ id: 1, username: 'Lesterinfo', firstName: 'Lester' });
