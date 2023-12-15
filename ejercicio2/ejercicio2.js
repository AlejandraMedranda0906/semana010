//Escribir un programa que permita obtener el numero 
//de piso de un edificio de oficinas donde el formato de numeración
// de las oficinas  es: “01.24” lo que significa piso 1 oficina 24.

`use strict`
let oficinas = `01.24`;
let piso = oficinas.substring(0,2);

alert (`se encuentra en el piso`+piso);

