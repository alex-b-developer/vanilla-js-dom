//Fecha actual
let ahora = new Date();
console.log(ahora);
console.log(ahora.toLocaleString());


//ingresa fecha año, mes, dia, hora, minuto, segundo
let fecha = new Date(1988,7,29,17,5,5);

//las separa en variables
let ano = fecha.getFullYear();
let mes = fecha.getMonth();
let dia = fecha.getDate();
let hora = fecha.getHours();
let min = fecha.getMinutes();
let sec = fecha.getSeconds();

console.log('Vas a viajar al año # ' +  ano + ' Al mes # ' + (mes + 1) + ' Al día # ' + dia);


//------------------------------------//

const date = new Date('10/1/2025, 7:03:59');
console.log(date);
console.log(date.toLocaleString());

const language = 'es-ES'
const datePrettyShort = date.toLocaleString(language, {day:'2-digit', month:'short', year:'numeric'});
const datePrettyLong = date.toLocaleString(language, {day:'2-digit', month:'long', year:'numeric'});

console.log(datePrettyShort);
console.log(datePrettyLong);