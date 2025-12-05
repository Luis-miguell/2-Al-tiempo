document.getElementById("Div-User")

// * Logica
let users = ["juan", "miguel", "ana", "lucia", "pedro", "sofia", "luis", "marta"];
let userNamePrompt = prompt("¿Cual es tu nombre?").toLowerCase();
let foundUser = false;
// ? completar la logica para cambiar el foundUser a true si el nombre esta en el array
// * logica
for (let i = 0; i < users.length; i++) {
    if (users[i] === userNamePrompt) {
        foundUser = true;
        break;
    }
}

function checkUser() {

if (foundUser) {
    alert("Bienvenid@, " + userNamePrompt + " estas invitad@ a las fiesta!");
    alert("Entra al siguiente link para ver la ubicacion: https://goo.gl/maps/example");
} else {
    alert("Lo siento " + userNamePrompt + " no estas en la lista de invitados.");
    // * logica volver a intentar
    let retry = confirm("¿Quieres intentar de nuevo?");
    if (retry) {
        userNamePrompt = prompt("¿Cual es tu nombre?").toLowerCase();
        foundUser = false;
        for (let i = 0; i < users.length; i++) {
            if (users[i] === userNamePrompt) {
                foundUser = true;
                break;
            }
        }
        checkUser();
    } else {
        alert("Gracias por tu visita.");
    }
}
};
checkUser();