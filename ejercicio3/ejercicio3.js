//Escribir un programa que obtenga el mes de la siguiente fecha: “2022-10-31”
`use strict`

let fecha = new Date("2022-09-31");
let mes = fecha.getMonth();
fecha.getMonth(fecha.getDate() );


alert(mes);
alert("este es el mes" +fecha.slice(5,7));