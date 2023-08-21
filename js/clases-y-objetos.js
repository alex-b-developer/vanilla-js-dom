//Clases y Objetos

//función constructora
function Usuario(nombre, apellidos, edad, telefono, pais, habilidades, profesion){

	//Propiedades
	this.nombre_completo = {
		'nombre': nombre,
		'apellidos': apellidos
	}
	this.edad = edad;
	this.telefono = telefono;
	this.pais = pais;
	this.habilidades = habilidades;
	this.profesion = profesion;

	//Metodos
	this.saludar = function(){
		alert('Hola, ' + this.nombre_completo.nombre + '.')
	}
}

//instanciación de la clase usuario
let usuario1 = new Usuario (
	'Alexander', 
	'Betancur', 35, 
	'3148734025', 
	'Colombia', 
	['html', 'css', 'js'],
	'Web Developer');


//Modificar propiedades
usuario1.direccion = 'Strayway to Heaven 123';
usuario1.aniversario = '29-08-1988';
usuario1.telefono = '6042168700';
delete usuario1.edad;

//imprime objejto1
console.log(usuario1);

//usar metodos
usuario1.saludar();

//Crea objeto apartir de otro
usuario2 = Object.create(usuario1);
usuario2.nombre_completo.nombre = 'Axel';
console.log(usuario2)

//crea metodo a objeto instanciado
usuario2.despedir = function(){
	alert('Bye-bye ' + usuario2.nombre_completo.nombre + '.');
}

usuario2.despedir();

//-------------------------------//

//crea objeto y asigna
let obj1 = new Object({
	nombre: 'Martica',
	saludar: function(){
		alert('');
	}
});

//crea objeto y asigna
let obj2 = {};
obj2.nombre = 'Pepito'

console.log(obj1);
console.log(obj2);


