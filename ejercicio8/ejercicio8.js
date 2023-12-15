//Desarrollar un programa que genere la asignación de letras para las filas de computadoras 
//en un laboratorio.Se debe tener en cuenta que la codificación sigue el formato
// LAB2#A, donde indica la fila A del laboratorio 2
//Entrada: LAB2#B
//Salida: C
`use strict`

 let inicio = "LAB2#B";
 let Salida = "C";

 function generaSig(fila){
 let numFila = File.slice(File.indexOf("#") +1);
 let letraActual = File[File.length -1];
 let codigoLetra = letraActual.codePointAt();
 let stgCodigo = codigoLetra +1;
 let stgletra = String.fromCodePoint(stgCodigo);

 let newAsig = File.slice(0, File.length -1)  + stgletra;

 return newAsig;
 }
 alert("inicio: " + inicio);
 alert("Salida:"  + Salida.slice(5));