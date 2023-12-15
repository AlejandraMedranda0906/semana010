//Escribir un programa para obtener el nombre de usuario 
//de un correo electrónico.


`use strict`
function nombreUsuario(correoElectronico){
    let formato = [a-zA-Z0-9]+  [a-zA-Z0-9] + [a-zA-Z](2.4)  .test(correoElectronico);
    if(formato){
        let nombreUsuario = correoElectronico.split("@")[0];
        return nombreUsuario;
    }
    else{
        return "correo electronico no valido";
    }

}
let correoElectronico = prompt("su correo electronico");
let nombreUsuario = nombreUsuario(correoElectronico);
alert(`nombre de usuario: ${nombreUsuario}`);
