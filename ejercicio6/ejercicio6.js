//Escribir un programa que obtenga el nombre 
//de usuario de facebook desde la url.
Entrada: facebook.com/nombreuser
Salida: nombreuser

`use strict`
function usuarioFacebook(url){
    let expresion = (facebook.com );
    let coincidencias = url.match(expresion);
    if (coincidencias && coincidencias [1]){
        return coincidencias [1];
    } else{
        return "no se pudo obtener";
    }


}

let urlFacebook = prompt("ingrese su url");

let nombreUsuario = usuarioFacebook(urlFacebook);

alert(`Nombre de usuario de Facebook: ${nombreUsuarioFacebook}`);
