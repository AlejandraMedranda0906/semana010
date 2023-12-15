//Escribir un programa que obtenga las iniciales de un jugador de futbol, 
//sabiendo que se usa iniciales y numero. 
//Ejemplo CR-7, LM-10, LFS-10, AV-25

`use strict`
let nombre = prompt("Ingrese el nombre de su jugador");
let formato = ([CR-7,LM-10,LFS-10,AV-25] .test(nombre));
if(formato){
    let (iniciales, numero) = nombre.match([CR-7,LM-10,LFS-10,AV-25]);
  alert(`Iniciales del jugador: ${iniciales}\numero del jugador: ${numero}`);

}

 else{
alert("la informacion no es valida");
 }   