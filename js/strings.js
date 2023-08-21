//SPLIT STRING

let sitioWeb = 'www.softmediastudio.com';
let divideDomain = sitioWeb.split('.');
console.log(divideDomain);

//SLICE

let fragmento = sitioWeb.slice(4,19);
console.log(fragmento);

//CHAR CODE AT

let entrada = prompt('Escribe y te lo paso a unicode')
let divide = entrada.split('');
console.log(divide);

for (let i=0; i<divide.length; i++){
	document.write(divide[i] + '------->');
	document.write(divide[i].charCodeAt() + '<br>');
}