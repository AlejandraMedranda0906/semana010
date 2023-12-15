//Escribir un programa que obtenga el ID de un recurso compartido de Gdrive.
//Entrada: https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link
//Salida: FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1


`use strict`

let urlGdrive =  "https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link";

let slash = urlGdrive.indexOf(`/d/`)  +3;
let Salida = urlGdrive.indexOf (`/`, slash);

let IDrecur = urlGdrive.slice(slash, Salida);
alert(`su ID compartido es:` + IDrecur);



