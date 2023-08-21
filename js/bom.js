//BOM Modelo Objeto del Navegador: window, navigator, location, etc.
let ventana;
let ancho;
let alto;

function abreVentana(){
	ancho = window.prompt('Qué ancho de ventana quiere?');
	alto = window.prompt('Y el alto?');
	ventana = window.open(
		'https://softmediastudio.com/websites/portfolio/', 
		'', 
		`width=${ancho}`, 
		`height=${alto}`
	);
}